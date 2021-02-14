const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
  },
  devtool: 'source-map',
  devServer: {
    publicPath: '/',
    inline: true,
    hot: false,
    port: 3000,
    historyApiFallback: true,
    disableHostCheck: true
  }
};
