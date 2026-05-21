/* eslint-disable */
// =========================================================================
// PDR COURT — pvtweb CSS Re-theming Builder
//
// Takes pvtweb's original app.css + font.css and produces
// app/pvtweb-theme.css — pvtweb's exact layout framework, but:
//   - Every selector scoped under `.pvtweb-scope` (no leakage into pdrweb-1)
//   - pvtweb's blue/grey palette swapped for pdrweb-1's gold/cream/espresso
//   - pvtweb's bespoke fonts swapped for the theme fonts (Inter / Cinzel)
//
// Result: migrated pages keep their EXACT original structure & layout,
// but wear pdrweb-1's color theme.
// =========================================================================

const fs = require("fs");
const path = require("path");

const SRC = "C:/mergeproject/pvtweb/css";
const OUT = path.join(__dirname, "..", "app", "pvtweb-theme.css");

let css = "";
for (const f of ["app.css"]) {
  const p = path.join(SRC, f);
  if (fs.existsSync(p)) css += fs.readFileSync(p, "utf8") + "\n";
}

// ───── 1. Color re-mapping (pvtweb → pdrweb-1 theme) ─────
const COLOR_MAP = [
  // pvtweb blue → pdrweb gold
  [/#304f9d/gi, "#bd6b20"],
  [/#3f6ddf/gi, "#d4862a"],
  [/#355bb9/gi, "#9a5518"],
  [/#0000ff/gi, "#bd6b20"],
  [/\b#00f\b/gi, "#bd6b20"],
  // pvtweb greys → pdrweb cream tints
  [/#f5f5f5/gi, "#faf8f5"],
  [/#fbfbfb/gi, "#ffffff"],
  [/#f1f1f1/gi, "#f4efe8"],
  [/#f2f2f2/gi, "#f4efe8"],
  [/#efefef/gi, "#f4efe8"],
  [/#dfdfdf/gi, "#ebe4d8"],
  [/#d9d9d9/gi, "#ebe4d8"],
  [/#d8d8d8/gi, "#ebe4d8"],
  [/#d3d3d3/gi, "#ebe4d8"],
  [/#cacaca/gi, "#ebe4d8"],
  [/\b#ccc\b/gi, "#ebe4d8"],
  [/#cccc\b/gi, "#ebe4d8"],
  [/\b#ddd\b/gi, "#ebe4d8"],
  [/\b#eee\b/gi, "#f4efe8"],
  [/#e8e8e8/gi, "#ebe4d8"],
  [/#b0b0b0/gi, "#a8a29e"],
  [/#a9a9a9/gi, "#9a5518"],
  // text colors
  [/#303030/gi, "#1c1917"],
  [/#484848/gi, "#44403c"],
  [/#7a7a7a/gi, "#78716c"],
];

// ───── 2. Font re-mapping ─────
const FONT_MAP = [
  [/greycliff-cf\s*,\s*sans-serif/gi, "var(--font-inter), Inter, system-ui, sans-serif"],
  [/greycliff-cf/gi, "var(--font-inter)"],
  [/ivypresto-display\s*,\s*serif/gi, "var(--font-cinzel), Cinzel, Georgia, serif"],
  [/ivypresto-display/gi, "var(--font-cinzel)"],
];

for (const [re, val] of COLOR_MAP) css = css.replace(re, val);
for (const [re, val] of FONT_MAP) css = css.replace(re, val);

// Strip every url(...) reference — pvtweb images are not migrated.
// A bare `background-image:url(...)` declaration becomes harmless / removed.
css = css.replace(/background-image\s*:\s*url\([^)]*\)\s*;?/gi, "");
css = css.replace(/background\s*:\s*url\([^)]*\)([^;}]*)/gi, "background:transparent");
css = css.replace(/url\((?:["']?)[^)"']*\.(?:png|jpe?g|gif|svg|webp)(?:["']?)\)/gi, "none");
css = css.replace(/-webkit-mask[^;}]*url\([^)]*\)[^;}]*;?/gi, "");
css = css.replace(/\bmask[^;}]*url\([^)]*\)[^;}]*;?/gi, "");
// Any remaining url() → none (defensive)
css = css.replace(/url\([^)]*\)/gi, "none");

// ───── 3. CSS scoping ─────
// Scope every rule under `.pvtweb-scope`. @media blocks are recursed into;
// @keyframes / @font-face internals are left untouched.
function scopeCss(input, scope) {
  let out = "";
  let i = 0;
  const n = input.length;
  while (i < n) {
    // skip whitespace
    while (i < n && /\s/.test(input[i])) {
      out += input[i];
      i++;
    }
    if (i >= n) break;

    if (input[i] === "@") {
      // at-rule
      let j = i;
      while (j < n && input[j] !== "{" && input[j] !== ";") j++;
      const prelude = input.slice(i, j);
      if (j >= n || input[j] === ";") {
        out += input.slice(i, j + 1);
        i = j + 1;
        continue;
      }
      // at-rule with a block — find matching close brace
      let depth = 0,
        k = j;
      do {
        if (input[k] === "{") depth++;
        else if (input[k] === "}") depth--;
        k++;
      } while (depth > 0 && k < n);
      const inner = input.slice(j + 1, k - 1);
      if (/^@(media|supports|layer)/i.test(prelude.trim())) {
        out += prelude + "{" + scopeCss(inner, scope) + "}";
      } else {
        // keyframes / font-face — keep internals verbatim
        out += prelude + "{" + inner + "}";
      }
      i = k;
      continue;
    }

    // normal rule — read selectors up to '{'
    let j = i;
    while (j < n && input[j] !== "{" && input[j] !== "}" && input[j] !== "@") j++;
    if (j >= n || input[j] !== "{") {
      out += input.slice(i, j);
      i = j;
      continue;
    }
    const selectors = input.slice(i, j).trim();
    // rule body
    let k = j + 1;
    while (k < n && input[k] !== "}") k++;
    const body = input.slice(j + 1, k);

    const scoped = selectors
      .split(",")
      .map((sel) => {
        sel = sel.trim();
        if (!sel) return sel;
        // Root-level selectors → become the scope itself
        if (/^(html|body|\*)$/i.test(sel)) return scope;
        // Selectors starting with html/body → replace that part
        if (/^(html|body)\b/i.test(sel)) {
          return sel.replace(/^(html|body)\b/i, scope);
        }
        // Pseudo / global — prefix
        return scope + " " + sel;
      })
      .join(",");

    out += scoped + "{" + body + "}";
    i = k + 1;
  }
  return out;
}

const scoped = scopeCss(css, ".pvtweb-scope");

// ───── 4. Extra overrides + figure-placeholder styling ─────
const ARROW_SVG =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'><path d='M5 12h14M13 5l7 7-7 7'/></svg>\")";

const overrides = `
/* ===== PDR COURT — migrated-content theme overrides (renovation v2) ===== */
.pvtweb-scope{
  color:#2b2724;
  font-family:var(--font-inter),Inter,system-ui,sans-serif;
  line-height:1.7;
  font-size:1.02rem;
}
.pvtweb-scope .main-container{max-width:1100px;margin:0 auto;padding:0;}
.pvtweb-scope section{padding-top:2.4rem;padding-bottom:2.4rem;}
.pvtweb-scope section+section{border-top:1px solid #efe7da;}

/* ---- Typography ---- */
.pvtweb-scope h1,.pvtweb-scope h2,.pvtweb-scope h3,
.pvtweb-scope h4,.pvtweb-scope h5,.pvtweb-scope h6{
  font-family:var(--font-poppins),Poppins,system-ui,sans-serif;
  color:#1c1917;line-height:1.18;letter-spacing:-0.01em;
}
.pvtweb-scope h1{font-size:clamp(2rem,3.2vw,2.9rem);font-weight:700;margin:0 0 1rem;}
.pvtweb-scope h2{font-size:clamp(1.6rem,2.4vw,2.15rem);font-weight:700;margin:2rem 0 .9rem;}
.pvtweb-scope h3{font-size:clamp(1.3rem,1.8vw,1.6rem);font-weight:600;margin:1.6rem 0 .7rem;}
.pvtweb-scope h4{font-size:1.18rem;font-weight:600;margin:1.3rem 0 .55rem;}
.pvtweb-scope h5{font-size:1.02rem;font-weight:600;margin:1rem 0 .45rem;}
.pvtweb-scope h6{font-size:.8rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#bd6b20;margin:1rem 0 .4rem;}
.pvtweb-scope h2::before{
  content:"";display:block;width:2.4rem;height:3px;border-radius:3px;
  background:linear-gradient(90deg,#bd6b20,#e09440);margin-bottom:.85rem;
}
.pvtweb-scope p{font-size:1.02rem;line-height:1.78;color:#46403a;margin:0 0 1.05rem;}
.pvtweb-scope li{font-size:1.02rem;line-height:1.7;color:#46403a;}
.pvtweb-scope b,.pvtweb-scope strong{color:#1c1917;font-weight:600;}
.pvtweb-scope a{color:#bd6b20;text-decoration:underline;text-decoration-color:rgba(189,107,32,.35);text-underline-offset:2px;transition:.2s;}
.pvtweb-scope a:hover{color:#9a5518;text-decoration-color:#bd6b20;}
.pvtweb-scope .ita,.pvtweb-scope .ita1,.pvtweb-scope .ita2,.pvtweb-scope .tagline span,.pvtweb-scope .nums1{
  font-family:var(--font-cinzel),Cinzel,Georgia,serif;font-style:italic;
}
.pvtweb-scope .blue,.pvtweb-scope .blue h1,.pvtweb-scope .blue h2,.pvtweb-scope .blue h3,
.pvtweb-scope .blue h4,.pvtweb-scope .blue h5,.pvtweb-scope .blue h6,.pvtweb-scope .blue p{color:#bd6b20;}
.pvtweb-scope .grey,.pvtweb-scope .greylight{color:#6b635a;}
.pvtweb-scope .pagetitle{font-family:var(--font-cinzel),Cinzel,serif;color:#ece2d2;}
.pvtweb-scope img{max-width:100%;height:auto;border-radius:14px;}

/* ---- Spacers tightened ---- */
.pvtweb-scope .spacer1{height:24px;}
.pvtweb-scope .spacer2{height:14px;}
.pvtweb-scope .spacer3{height:44px;}
.pvtweb-scope .spacer4{height:48px;min-height:48px;}
.pvtweb-scope .spacerm{height:0;}

/* ---- Themed replacement for stripped pvtweb images ---- */
.pvtweb-scope .pvt-figure{
  display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;
  background:
    radial-gradient(120% 120% at 15% 10%, rgba(255,255,255,.6) 0%, transparent 55%),
    linear-gradient(135deg,#faf1e2 0%,#f1cf9f 55%,#e29043 100%);
  border:1px solid #ecb478;border-radius:1.5rem;
  color:#7d4315;font-weight:600;font-size:.82rem;
  min-height:170px;padding:2rem 1.6rem;margin:1.4rem 0;
  letter-spacing:.03em;text-transform:uppercase;
}
.pvtweb-scope .pvt-figure::before{
  content:"";display:block;width:40px;height:40px;margin-bottom:.7rem;
  background:#bd6b20;
  -webkit-mask:${ARROW_SVG.replace("M5 12h14M13 5l7 7-7 7", "M3 16l5-5 4 4 5-6 4 4M3 4h18v16H3z")} center/contain no-repeat;
          mask:${ARROW_SVG.replace("M5 12h14M13 5l7 7-7 7", "M3 16l5-5 4 4 5-6 4 4M3 4h18v16H3z")} center/contain no-repeat;
}
.pvtweb-scope .pvt-figure span{display:block;max-width:34ch;opacity:.9;}

/* ---- Flex layout safety ---- */
.pvtweb-scope .flrw{flex-wrap:wrap;gap:1.25rem;}
.pvtweb-scope .flcl{gap:.75rem;}
.pvtweb-scope .padf1{padding:.6rem;}
.pvtweb-scope .padf2{padding:1.1rem;}
.pvtweb-scope .padf3{padding:1.6rem;}

/* ---- Cards / blocks ---- */
.pvtweb-scope .greyblock1,.pvtweb-scope .greyblock2,.pvtweb-scope .greyblock3,
.pvtweb-scope .greyblock4,.pvtweb-scope .greyblock5,.pvtweb-scope .nblock,
.pvtweb-scope .greybg{
  background:#fdfaf5;border:1px solid #efe7da;border-radius:1.4rem;
  box-shadow:0 2px 18px rgba(124,67,21,.04);
}
.pvtweb-scope .greyblock1{border-radius:1.4rem;}
.pvtweb-scope .nblock:hover{border-color:rgba(189,107,32,.4);box-shadow:0 10px 30px rgba(124,67,21,.1);transform:translateY(-3px);transition:.3s;}
.pvtweb-scope .outlineblock1,.pvtweb-scope .outlineblock2,.pvtweb-scope .outlineblock3,
.pvtweb-scope .outlineblock4,.pvtweb-scope .outlineblock5,.pvtweb-scope .outlineblock6,
.pvtweb-scope .outlineblock7,.pvtweb-scope .outlineblock8{
  border:1px solid #e4d4bd;border-radius:1.2rem;background:#fff;
}
.pvtweb-scope .bluebg,.pvtweb-scope .bluebig,.pvtweb-scope .blueblock1{
  background:linear-gradient(135deg,#bd6b20,#e09440)!important;color:#fff;border-radius:1.2rem;
}
.pvtweb-scope .bluebg *,.pvtweb-scope .bluebig *,.pvtweb-scope .blueblock1 *{color:#fff;}
.pvtweb-scope .news-flash-box,.pvtweb-scope .news-flash-title{
  background:linear-gradient(135deg,#bd6b20,#e09440)!important;border-radius:1rem;
}

/* ---- Buttons: pill + circular arrow badge ---- */
.pvtweb-scope .butmim1,.pvtweb-scope .butmim2,.pvtweb-scope .butmim3,
.pvtweb-scope .butmim4,.pvtweb-scope .butmim5,.pvtweb-scope .butmim6{
  display:inline-flex;align-items:center;gap:.85rem;
  background:linear-gradient(135deg,#bd6b20,#e09440);
  border:0!important;border-radius:9999px!important;
  padding:.5rem .55rem .5rem 1.5rem!important;
  box-shadow:0 6px 20px rgba(189,107,32,.22);
  max-width:none!important;width:auto!important;min-width:0!important;
  transition:.3s var(--ease-out-expo,cubic-bezier(0.16,1,0.3,1));
  transform:none!important;
}
.pvtweb-scope .butmim1 *,.pvtweb-scope .butmim2 *,.pvtweb-scope .butmim3 *,
.pvtweb-scope .butmim4 *,.pvtweb-scope .butmim5 *,.pvtweb-scope .butmim6 *{color:#fff!important;}
.pvtweb-scope .butmim1 h1,.pvtweb-scope .butmim1 h2,.pvtweb-scope .butmim1 h3,
.pvtweb-scope .butmim1 h4,.pvtweb-scope .butmim1 h5,.pvtweb-scope .butmim1 h6,
.pvtweb-scope .butmim1 p,.pvtweb-scope [class*=butmim] h4,.pvtweb-scope [class*=butmim] h5,
.pvtweb-scope [class*=butmim] h6,.pvtweb-scope [class*=butmim] p{
  margin:0!important;font-size:.92rem!important;font-weight:600!important;padding:0!important;
}
.pvtweb-scope .butmim1:hover,.pvtweb-scope .butmim2:hover,.pvtweb-scope .butmim3:hover,
.pvtweb-scope .butmim4:hover,.pvtweb-scope .butmim5:hover,.pvtweb-scope .butmim6:hover{
  box-shadow:0 10px 30px rgba(189,107,32,.34);transform:translateY(-2px)!important;background:linear-gradient(135deg,#a85e1c,#d4862a);
}
.pvtweb-scope .bluebig,.pvtweb-scope .butmim7,.pvtweb-scope .butmim8,
.pvtweb-scope .butmim9,.pvtweb-scope .butmim10,.pvtweb-scope .butmim11{
  border-radius:9999px!important;
}
/* circular arrow badge (was an <img> in pvtweb) */
.pvtweb-scope .buttoncircle1{
  position:static!important;width:2.4rem!important;height:2.4rem!important;
  flex-shrink:0;border:1.5px solid rgba(255,255,255,.6)!important;border-radius:9999px;
  background:rgba(255,255,255,.12);display:inline-flex;align-items:center;justify-content:center;
}
.pvtweb-scope .buttoncircle1::after{
  content:"";width:1rem;height:1rem;background:#fff;
  -webkit-mask:${ARROW_SVG} center/contain no-repeat;
          mask:${ARROW_SVG} center/contain no-repeat;
}
.pvtweb-scope .arrow1,.pvtweb-scope .arrow2{display:none;}

/* ---- Process / step numbers ---- */
.pvtweb-scope .nums1{
  display:inline-flex;align-items:center;justify-content:center;
  width:2.6rem;height:2.6rem;border-radius:9999px;
  background:linear-gradient(135deg,#bd6b20,#e09440);color:#fff!important;
  font-size:1.05rem;font-weight:700;
}
.pvtweb-scope .processcircle1{display:none;}

/* ---- Lists ---- */
.pvtweb-scope ul,.pvtweb-scope ol{padding-left:1.3rem;margin:0 0 1.2rem;}
.pvtweb-scope ul li{margin:.45rem 0;}
.pvtweb-scope ol li{margin:.5rem 0;}
.pvtweb-scope .rempoints{list-style:none;padding-left:0;}
.pvtweb-scope .crilist1 li,.pvtweb-scope .crilist2 li{
  list-style:none;position:relative;padding-left:1.7rem;margin:.55rem 0;color:#46403a;
}
.pvtweb-scope .crilist1 li::before,.pvtweb-scope .crilist2 li::before{
  content:"";position:absolute;left:0;top:.55rem;width:.85rem;height:.85rem;border-radius:50%;
  background:linear-gradient(135deg,#bd6b20,#e09440);
}
.pvtweb-scope .footerlinks{list-style:none;padding-left:0;}

/* ---- Quotes / testimonials ---- */
.pvtweb-scope .testimonial1,.pvtweb-scope blockquote{
  background:#fdfaf5;border:1px solid #efe7da;border-left:4px solid #bd6b20;
  border-radius:0 1.2rem 1.2rem 0;padding:1.6rem 1.8rem;margin:1.4rem 0;
}
.pvtweb-scope .quotemark1{
  width:2.4rem;height:2.4rem;background:#bd6b20;display:block;margin:0 0 .4rem;
  -webkit-mask:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><text y='20' font-size='24' font-family='Georgia' fill='black'>&#8220;</text></svg>") left/contain no-repeat;
          mask:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><text y='20' font-size='24' font-family='Georgia' fill='black'>&#8220;</text></svg>") left/contain no-repeat;
}

/* ---- FAQ accordion ---- */
.pvtweb-scope .faqs-wrapper .faq{
  border:1px solid #e4d4bd;border-radius:1.1rem;background:#fff;padding:1.1rem 1.3rem;margin-bottom:.7rem;
}
.pvtweb-scope .faqs-wrapper .faq--title{color:#1c1917;font-weight:600;}
.pvtweb-scope .faqs-wrapper .faq--title svg{stroke:#bd6b20;}

/* ---- Tables ---- */
.pvtweb-scope table{width:100%;border-collapse:collapse;margin:1.4rem 0;border-radius:.8rem;overflow:hidden;}
.pvtweb-scope th,.pvtweb-scope td{border:1px solid #ebe4d8;padding:.8rem 1rem;text-align:left;}
.pvtweb-scope th{background:#f6efe3;color:#1c1917;font-weight:700;}
.pvtweb-scope .table-container{overflow-x:auto;}

/* ---- Borders → soft hairlines ---- */
.pvtweb-scope .t-bord,.pvtweb-scope .b-bord,.pvtweb-scope .tb-bord,
.pvtweb-scope .l-bord,.pvtweb-scope .r-bord,.pvtweb-scope .lr-bord{border-color:#efe7da!important;}
.pvtweb-scope .vertline,.pvtweb-scope .vertline1,.pvtweb-scope .hozline,
.pvtweb-scope .l-bord-of1,.pvtweb-scope .line1{display:none!important;}

/* ---- Rounded image frames ---- */
.pvtweb-scope .rou1-bord,.pvtweb-scope .rou2-bord,.pvtweb-scope .crimg1,
.pvtweb-scope .crimg2,.pvtweb-scope .crimg3,.pvtweb-scope .crimg4,
.pvtweb-scope .crimg5,.pvtweb-scope .crimg6,.pvtweb-scope .crimg7{border-radius:1.5rem!important;}

/* ---- Forms ---- */
.pvtweb-scope input,.pvtweb-scope textarea,.pvtweb-scope select{
  border:1px solid #e4d4bd!important;border-radius:.7rem!important;color:#1c1917!important;
  padding:.7rem .9rem!important;font-size:.95rem;
}
.pvtweb-scope .formtheme1 .button,.pvtweb-scope .formtheme2 .button,
.pvtweb-scope button[type=submit]{
  background:linear-gradient(135deg,#bd6b20,#e09440)!important;color:#fff!important;
  border:0!important;border-radius:9999px!important;padding:.7rem 1.6rem!important;cursor:pointer;
}

/* ---- Converted data-link / onclick nav buttons ---- */
.pvtweb-scope a.pvt-cta-link{display:inline-block;text-decoration:none;color:inherit;cursor:pointer;}
.pvtweb-scope a.pvt-cta-link:hover{text-decoration:none;}

/* ---- Loader / chrome remnants hidden ---- */
.pvtweb-scope .page-loader,.pvtweb-scope .mobnav,.pvtweb-scope #js-pointer-detector,
.pvtweb-scope .scadule-meeting,.pvtweb-scope .delayedPopupWindow,.pvtweb-scope .modal{display:none!important;}

/* ---- First section spacing reset ---- */
.pvtweb-scope>section:first-child,.pvtweb-scope>div:first-child{padding-top:0;}
.pvtweb-scope>section:first-child{border-top:0;}
`;

fs.writeFileSync(OUT, scoped + "\n" + overrides);
console.log(`Built ${OUT}`);
console.log(`Scoped CSS size: ${(scoped.length / 1024).toFixed(1)}KB`);
