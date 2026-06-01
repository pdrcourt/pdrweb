/* eslint-disable */
// =========================================================================
// PDR COURT — Per-page SVG Cover Generator
//
// For every migrated page (in master-index.json), produces a unique themed
// SVG cover at /public/covers/[slug].svg. Each cover:
//   - Uses pdrweb-1's gold / cream / dark palette
//   - Picks 1 of 8 visual templates by hash(slug)
//   - Picks 1 of 5 palette variants by hash(slug)
//   - Adds a small category badge motif (article / news / case / core)
//
// SVGs are ~2KB each, scale flawlessly, never depend on pvtweb assets.
// =========================================================================

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "public", "covers");
const masterIndex = require(path.join(ROOT, "data", "migrated", "master-index.json"));

fs.mkdirSync(OUT, { recursive: true });

// ───── Hash & RNG ─────
function hash(s) {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function rng(seed) {
  // Deterministic Mulberry32
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ───── Palettes ─────
const PALETTES = [
  // Gold dominant
  { name: "gold", bg1: "#12100e", bg2: "#1c1917", primary: "#834009", accent: "#c66e1c", soft: "#f5dabf", ink: "#faf8f5" },
  // Cream light
  { name: "cream", bg1: "#faf8f5", bg2: "#f4efe8", primary: "#834009", accent: "#6e3608", soft: "#db8a2f", ink: "#12100e" },
  // Dark with gold
  { name: "dusk",  bg1: "#0c0a09", bg2: "#291813", primary: "#a85220", accent: "#834009", soft: "#eab476", ink: "#faf8f5" },
  // Sunset
  { name: "sunset", bg1: "#2c1603", bg2: "#834009", primary: "#c66e1c", accent: "#fbf1e3", soft: "#eab476", ink: "#faf8f5" },
  // Espresso & cream
  { name: "espresso", bg1: "#422105", bg2: "#582b06", primary: "#db8a2f", accent: "#f5dabf", soft: "#eab476", ink: "#faf8f5" },
];

// ───── Helpers ─────
function escText(s) {
  return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function truncate(s, n) {
  s = String(s || "");
  return s.length > n ? s.slice(0, n - 1).trim() + "…" : s;
}
function wrapText(s, maxChars) {
  const words = String(s || "").split(/\s+/);
  const lines = [];
  let line = "";
  for (const w of words) {
    if ((line + " " + w).trim().length > maxChars) {
      if (line) lines.push(line);
      line = w;
    } else {
      line = (line + " " + w).trim();
    }
  }
  if (line) lines.push(line);
  return lines;
}

const W = 1200, H = 675; // 16:9

// ───── Category badge motif (right-bottom corner) ─────
function categoryMotif(category, palette) {
  const c = palette.primary;
  const c2 = palette.accent;
  switch (category) {
    case "news":
      return `<g opacity="0.85" transform="translate(${W - 180}, ${H - 180})">
        <circle r="68" fill="none" stroke="${c}" stroke-width="2" opacity="0.35"/>
        <path d="M -38 12 L 38 12 M -32 -8 L 32 -8 M -45 -28 L 45 -28" stroke="${c2}" stroke-width="3" stroke-linecap="round"/>
        <rect x="-50" y="-44" width="100" height="80" fill="none" stroke="${c}" stroke-width="2"/>
      </g>`;
    case "articles":
      return `<g opacity="0.85" transform="translate(${W - 180}, ${H - 180})">
        <rect x="-46" y="-60" width="92" height="115" fill="${c}" opacity="0.18" rx="6"/>
        <path d="M -28 -36 L 28 -36 M -28 -12 L 28 -12 M -28 12 L 18 12 M -28 36 L 28 36" stroke="${c2}" stroke-width="3" stroke-linecap="round"/>
      </g>`;
    case "case-studies":
      return `<g opacity="0.85" transform="translate(${W - 180}, ${H - 180})">
        <circle r="60" fill="${c}" opacity="0.18"/>
        <path d="M -34 6 Q -10 -22 14 6 Q 34 24 14 26 L -22 26 Q -38 24 -34 6 Z" fill="none" stroke="${c2}" stroke-width="3" stroke-linejoin="round"/>
      </g>`;
    default:
      return `<g opacity="0.85" transform="translate(${W - 180}, ${H - 180})">
        <polygon points="0,-50 43,25 -43,25" fill="none" stroke="${c}" stroke-width="2"/>
        <polygon points="0,-30 26,15 -26,15" fill="${c2}" opacity="0.4"/>
      </g>`;
  }
}

// ───── Title block ─────
function titleBlock(title, palette) {
  const lines = wrapText(truncate(title, 90), 26).slice(0, 3);
  const startY = H - 110 - (lines.length - 1) * 50;
  const tspans = lines.map((ln, i) =>
    `<tspan x="80" dy="${i === 0 ? 0 : 56}">${escText(ln)}</tspan>`
  ).join("");
  return `<text x="80" y="${startY}" font-family="ui-sans-serif, -apple-system, Segoe UI, Inter, sans-serif" font-weight="800" font-size="44" fill="${palette.ink}" opacity="0.98">${tspans}</text>`;
}

function categoryBadge(category, palette) {
  const label =
    category === "news" ? "Newsroom" :
    category === "articles" ? "Article" :
    category === "case-studies" ? "Case Study" :
    "Information";
  return `<g transform="translate(80, 90)">
    <rect x="0" y="0" rx="20" ry="20" width="${24 + label.length * 11}" height="38" fill="${palette.primary}" opacity="0.18" stroke="${palette.primary}" stroke-width="1.5"/>
    <text x="${12 + (24 + label.length * 11 - 24) / 2}" y="25" font-family="ui-sans-serif, Inter, sans-serif" font-weight="700" font-size="14" letter-spacing="2.5" fill="${palette.primary}" text-anchor="middle">${label.toUpperCase()}</text>
  </g>`;
}

function frame(palette, body, category, title) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${escText(title)}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${palette.bg1}"/>
      <stop offset="100%" stop-color="${palette.bg2}"/>
    </linearGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${palette.primary}"/>
      <stop offset="100%" stop-color="${palette.accent}"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${palette.primary}" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="${palette.primary}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  ${body}
  ${categoryMotif(category, palette)}
  ${categoryBadge(category, palette)}
  ${titleBlock(title, palette)}
  <rect x="0" y="${H - 6}" width="${W}" height="6" fill="url(#gold)"/>
</svg>`;
}

// ───── 8 visual templates ─────
const templates = [
  // 0. Soft circles & glow
  function circles(rand, palette) {
    let body = `<circle cx="${W * 0.18}" cy="${H * 0.35}" r="${280 + rand() * 90}" fill="url(#glow)" opacity="0.8"/>`;
    for (let i = 0; i < 5; i++) {
      const cx = rand() * W;
      const cy = rand() * H * 0.7;
      const r = 60 + rand() * 220;
      const opacity = (0.07 + rand() * 0.12).toFixed(2);
      body += `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r.toFixed(1)}" fill="${palette.primary}" opacity="${opacity}"/>`;
    }
    body += `<circle cx="${(W * 0.82).toFixed(1)}" cy="${(H * 0.25).toFixed(1)}" r="220" fill="none" stroke="${palette.accent}" stroke-width="1.5" opacity="0.4"/>`;
    return body;
  },

  // 1. Diagonal stripes
  function stripes(rand, palette) {
    let body = "";
    for (let i = -4; i < 10; i++) {
      const x = i * 180 + rand() * 80;
      const opacity = (0.05 + rand() * 0.15).toFixed(2);
      const w = 60 + rand() * 80;
      body += `<rect x="${x.toFixed(1)}" y="-80" width="${w.toFixed(1)}" height="${H + 200}" transform="rotate(18 ${x.toFixed(1)} ${H/2})" fill="${palette.primary}" opacity="${opacity}"/>`;
    }
    body += `<rect x="0" y="0" width="${W}" height="${H}" fill="url(#glow)" opacity="0.6"/>`;
    return body;
  },

  // 2. Polygon mesh
  function polygons(rand, palette) {
    let body = "";
    for (let i = 0; i < 14; i++) {
      const cx = rand() * W;
      const cy = rand() * H;
      const r = 40 + rand() * 130;
      const sides = 3 + Math.floor(rand() * 3);
      const rot = rand() * Math.PI * 2;
      const pts = [];
      for (let j = 0; j < sides; j++) {
        const a = rot + (j / sides) * Math.PI * 2;
        pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`);
      }
      const opacity = (0.05 + rand() * 0.14).toFixed(2);
      body += `<polygon points="${pts.join(" ")}" fill="${palette.accent}" opacity="${opacity}"/>`;
    }
    body += `<circle cx="${(W * 0.78).toFixed(1)}" cy="${(H * 0.3).toFixed(1)}" r="180" fill="url(#glow)"/>`;
    return body;
  },

  // 3. Wave layers
  function waves(rand, palette) {
    let body = "";
    for (let i = 0; i < 4; i++) {
      const yBase = H * 0.4 + i * 65 + rand() * 30;
      const amp = 30 + rand() * 60;
      const phase = rand() * 6;
      const pts = [];
      for (let x = -50; x <= W + 50; x += 30) {
        const y = yBase + amp * Math.sin((x / 200) + phase);
        pts.push(`${x.toFixed(0)},${y.toFixed(1)}`);
      }
      pts.push(`${W + 50},${H + 50}`, `-50,${H + 50}`);
      const opacity = (0.08 + i * 0.05).toFixed(2);
      body += `<polygon points="${pts.join(" ")}" fill="${palette.primary}" opacity="${opacity}"/>`;
    }
    body += `<circle cx="${(W * 0.25).toFixed(1)}" cy="${(H * 0.28).toFixed(1)}" r="160" fill="url(#glow)"/>`;
    return body;
  },

  // 4. Dot grid
  function dots(rand, palette) {
    let body = "";
    const step = 36;
    for (let y = 30; y < H; y += step) {
      for (let x = 30; x < W; x += step) {
        const jitter = rand() * 0.6;
        const r = 1.6 + rand() * 2.4;
        const opacity = (0.15 + jitter * 0.35).toFixed(2);
        body += `<circle cx="${(x + rand() * 6 - 3).toFixed(1)}" cy="${(y + rand() * 6 - 3).toFixed(1)}" r="${r.toFixed(2)}" fill="${palette.primary}" opacity="${opacity}"/>`;
      }
    }
    body += `<circle cx="${(W * 0.15 + rand() * 100).toFixed(1)}" cy="${(H * 0.3 + rand() * 80).toFixed(1)}" r="220" fill="url(#glow)" opacity="0.9"/>`;
    return body;
  },

  // 5. Block composition
  function blocks(rand, palette) {
    let body = "";
    const blocks = [
      { x: W * 0.05, y: H * 0.1, w: W * 0.4, h: H * 0.3, color: palette.primary, op: 0.18 },
      { x: W * 0.5,  y: H * 0.15, w: W * 0.3, h: H * 0.5, color: palette.accent, op: 0.22 },
      { x: W * 0.1,  y: H * 0.45, w: W * 0.25, h: H * 0.25, color: palette.soft, op: 0.18 },
      { x: W * 0.83, y: H * 0.05, w: W * 0.12, h: H * 0.35, color: palette.primary, op: 0.3 },
    ];
    for (const b of blocks) {
      const rot = (rand() - 0.5) * 4;
      body += `<rect x="${b.x.toFixed(0)}" y="${b.y.toFixed(0)}" width="${b.w.toFixed(0)}" height="${b.h.toFixed(0)}" rx="14" transform="rotate(${rot.toFixed(2)} ${(b.x + b.w/2).toFixed(0)} ${(b.y + b.h/2).toFixed(0)})" fill="${b.color}" opacity="${b.op}"/>`;
    }
    body += `<rect x="0" y="0" width="${W}" height="${H}" fill="url(#glow)" opacity="0.4"/>`;
    return body;
  },

  // 6. Concentric rings
  function rings(rand, palette) {
    const cx = W * (0.18 + rand() * 0.12);
    const cy = H * (0.25 + rand() * 0.15);
    let body = "";
    for (let i = 1; i <= 9; i++) {
      const r = 60 + i * 55;
      const opacity = (0.4 - i * 0.04).toFixed(2);
      body += `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r.toFixed(0)}" fill="none" stroke="${palette.primary}" stroke-width="${(1.5 + rand()).toFixed(1)}" opacity="${opacity}"/>`;
    }
    body += `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="40" fill="url(#gold)" opacity="0.85"/>`;
    return body;
  },

  // 7. Floating shapes
  function floaters(rand, palette) {
    let body = `<circle cx="${(W * 0.7).toFixed(1)}" cy="${(H * 0.2).toFixed(1)}" r="240" fill="url(#glow)" opacity="0.8"/>`;
    for (let i = 0; i < 22; i++) {
      const x = rand() * W;
      const y = rand() * H * 0.85;
      const size = 14 + rand() * 50;
      const opacity = (0.1 + rand() * 0.25).toFixed(2);
      const rot = rand() * 360;
      const shape = Math.floor(rand() * 3);
      if (shape === 0) {
        body += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(size / 2).toFixed(1)}" fill="${palette.accent}" opacity="${opacity}"/>`;
      } else if (shape === 1) {
        body += `<rect x="${(x - size / 2).toFixed(1)}" y="${(y - size / 2).toFixed(1)}" width="${size.toFixed(1)}" height="${size.toFixed(1)}" rx="4" transform="rotate(${rot.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})" fill="${palette.primary}" opacity="${opacity}"/>`;
      } else {
        const s = size / 2;
        body += `<polygon points="${x.toFixed(1)},${(y - s).toFixed(1)} ${(x + s).toFixed(1)},${(y + s).toFixed(1)} ${(x - s).toFixed(1)},${(y + s).toFixed(1)}" fill="${palette.soft}" opacity="${opacity}"/>`;
      }
    }
    return body;
  },
];

// ───── Generate ─────
let count = 0;
for (const [slug, entry] of Object.entries(masterIndex)) {
  const seed = hash(slug);
  const rand = rng(seed);
  const palette = PALETTES[seed % PALETTES.length];
  const template = templates[seed % templates.length];
  const body = template(rand, palette);
  const svg = frame(palette, body, entry.category, entry.title);
  fs.writeFileSync(path.join(OUT, `${slug}.svg`), svg);
  count++;
}

console.log(`Generated ${count} themed SVG covers → ${OUT}`);
