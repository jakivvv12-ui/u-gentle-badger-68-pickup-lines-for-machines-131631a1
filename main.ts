const fs = require("fs");
const path = require("path");

const LINE = "You must be overfitting, because I can't generalize away from you.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error("entry must be 1-200 characters");
}
if (/[\r\n]/.test(LINE) || LINE.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE + "\n");
