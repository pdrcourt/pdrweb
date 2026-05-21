/* eslint-disable */
// =========================================================================
// PDR COURT — Global Compliance Sweep
// Applies the four compliance transformations across all source files:
//   1. privatecourt -> PDR COURT (case-aware)
//   2. Remove "Ankit Verma" -> "the team"
//   3. @privatecourt.in / @pvtcourt.in / @pvtcourt.com -> @pdrcourt.com
//   4. Common phone numbers -> 8976955540
// Operates on .ts/.tsx/.json/.md/.html under pdrweb-1, skipping node_modules,
// .next, scripts (so this file isn't self-edited), and migrated data
// (which already had compliance applied during extraction).
// =========================================================================

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SKIP_DIRS = new Set(["node_modules", ".next", "scripts", ".git"]);
const SKIP_FILES = new Set([
  // Don't touch migrated extraction outputs — they've already been cleaned
  // (and we want to preserve originalSlug references for source tracking).
  "news.json",
  "articles.json",
  "case-studies.json",
  "core.json",
  "index.json",
]);
const EXTS = new Set([".ts", ".tsx", ".js", ".jsx", ".json", ".md", ".html", ".css"]);

const PHONES = [
  /\b9699900111\b/g,
  /\b9899900111\b/g,
  /\+?91[-\s]?9699900111\b/g,
  /\+?91[-\s]?9899900111\b/g,
];

function applyCompliance(text) {
  let s = String(text);

  // Email domain swap (do BEFORE Private→PDR so we catch the .in domain)
  s = s.replace(/@privatecourt\.in/gi, "@pdrcourt.com");
  s = s.replace(/@pvtcourt\.in/gi, "@pdrcourt.com");
  s = s.replace(/@pvtcourt\.com/gi, "@pdrcourt.com");
  s = s.replace(/\bankit@/gi, "info@");

  // Remove Ankit Verma references (multiple variants)
  s = s.replace(
    /(?:by\s+|with\s+|of\s+|founder\s+)?(?:Mr\.?\s+|Shri\s+|Sh\.?\s+)?Ankit\s+Verma(?:[,'’]s)?/gi,
    "the team"
  );
  s = s.replace(/Ankit\s+Verma/gi, "the team");
  s = s.replace(/\b(founder|ceo|director|chairman|mr\.?|shri)\s+Ankit\b/gi, "$1 the team");

  // Phone numbers
  for (const rx of PHONES) s = s.replace(rx, "8976955540");

  // Twitter handles & social handles (PrivateCourt1, PrivateCourt_official, etc.)
  s = s.replace(/@PrivateCourt(\w*)/gi, "@PDRCourt$1");
  s = s.replace(/@pvt_court/gi, "@pdr_court");
  s = s.replace(/@pvtcourt(\w*)/gi, "@pdrcourt$1");

  // privatecourt -> PDR COURT (case-aware) — order matters: ALLCAPS first
  s = s.replace(/PRIVATECOURT/g, "PDR COURT");
  s = s.replace(/PrivateCourt/g, "PDR COURT");
  s = s.replace(/Privatecourt/g, "PDR COURT");
  s = s.replace(/privatecourt/g, "PDR Court");
  s = s.replace(/\bPrivate\s+Court\b/g, "PDR Court");
  s = s.replace(/pvtcourt/gi, "pdrcourt");

  return s;
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, files);
    } else if (entry.isFile()) {
      if (SKIP_FILES.has(entry.name)) continue;
      const ext = path.extname(entry.name).toLowerCase();
      if (EXTS.has(ext)) files.push(full);
    }
  }
  return files;
}

const files = walk(ROOT);
let changed = 0;
for (const f of files) {
  let content;
  try {
    content = fs.readFileSync(f, "utf8");
  } catch (e) {
    continue;
  }
  const updated = applyCompliance(content);
  if (updated !== content) {
    fs.writeFileSync(f, updated);
    changed++;
    console.log("  cleaned:", path.relative(ROOT, f));
  }
}

console.log(`\nDone. Cleaned ${changed} files of ${files.length} scanned.`);
