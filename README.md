# sr25519

This is a sr25519 code made with Rust.
This can be used from Node.JS by compiling to WASM.

## For library developers

```shell
cargo install wasm-pack
wasm-pack build
cd pkg
npm publish
```

## To use in web

```bash
npm i -D @wasm-tool/wasm-pack-plugin
```

`webpack.config.js`

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
  resolve: {
    extensions: [".js", ".ts", ".wasm"],
  },
  plugins: [
    new WasmPackPlugin({
      crateDirectory: path.join(__dirname, "node_modules/sr25519"),
    }),
  ],
};
```
