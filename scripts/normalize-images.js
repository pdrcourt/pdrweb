/* eslint-disable */
// =========================================================================
// Copy legacy images that are referenced by client pages to /public/images
// with compliance-renamed filenames (private-court-* -> pdr-court-*).
// Then update path references in source files.
// =========================================================================

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const PUBLIC_IMAGES = path.join(ROOT, "public", "images");
const LEGACY = path.join(ROOT, "public", "legacy-images");

if (!fs.existsSync(LEGACY)) {
  console.log("No legacy-images folder — skipping.");
  process.exit(0);
}

// Collect all `private-court-*` and other commonly-referenced legacy image basenames
const legacyFiles = fs.readdirSync(LEGACY);

let copied = 0;
const renames = {}; // oldName -> newName

for (const f of legacyFiles) {
  const lower = f.toLowerCase();
  // Only copy these targeted legacy assets to /public/images
  if (!/^(private-court|pc-|pvt-|pvtcourt|happy-|business|professional|woman|man-|indian)/.test(lower)) {
    continue;
  }
  const newName = f.replace(/private-court/gi, "pdr-court").replace(/pvtcourt/gi, "pdrcourt");
  const src = path.join(LEGACY, f);
  const dest = path.join(PUBLIC_IMAGES, newName);
  if (!fs.existsSync(dest)) {
    try {
      fs.copyFileSync(src, dest);
      copied++;
    } catch (e) {
      continue;
    }
  }
  if (newName !== f) renames[f] = newName;
}

console.log(`Copied ${copied} legacy assets to /public/images`);
console.log(`Renamed paths: ${Object.keys(renames).length}`);

// Now sweep source files and update path references:
//   /images/private-court-X  ->  /images/pdr-court-X
//   /images/pvtcourt-X        ->  /images/pdrcourt-X
const SKIP_DIRS = new Set(["node_modules", ".next", ".git", "scripts"]);
const EXTS = new Set([".ts", ".tsx", ".js", ".jsx", ".json", ".md", ".html", ".css"]);

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (EXTS.has(path.extname(entry.name).toLowerCase())) files.push(full);
  }
  return files;
}

let touched = 0;
for (const f of walk(ROOT)) {
  let content;
  try { content = fs.readFileSync(f, "utf8"); } catch (e) { continue; }
  const original = content;
  // Replace path forms
  content = content.replace(/\/images\/private-court/gi, "/images/pdr-court");
  content = content.replace(/\/images\/pvtcourt/gi, "/images/pdrcourt");
  content = content.replace(/['"]private-court([\w-]+\.(?:png|jpg|jpeg|svg|webp))['"]/gi, (m, rest) =>
    m[0] + "pdr-court" + rest + m[0]
  );
  if (content !== original) {
    fs.writeFileSync(f, content);
    touched++;
  }
}

console.log(`Updated path references in ${touched} files`);
