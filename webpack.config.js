const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {filename: "bundle.js", path: path.resolve(__dirname, "dist"), publicPath: "/dist/"},
  devtool: "cheap-eval-source-map",
  devServer: {publicPath: "/dist/", port: 3000}
};
