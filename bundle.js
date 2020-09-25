const fs = require("fs");

const bytes = fs.readFileSync("pkg/sr25519_bg.wasm");
fs.writeFileSync(
  "pkg/sr25519_bg.js",
  `module.exports.base64 = '${bytes.toString("base64")}';`
);

const src = fs.readFileSync("pkg/sr25519.js").toString("utf-8");
fs.writeFileSync(
  "pkg/sr25519.js",
  `const sr25519_bg = require('./sr25519_bg.js');\n\n` +
    src.replace(
      `const path = require('path').join(__dirname, 'sr25519_bg.wasm');
const bytes = require('fs').readFileSync(path);`,
      "const bytes = Buffer.from(sr25519_bg.base64, 'base64');"
    )
);
