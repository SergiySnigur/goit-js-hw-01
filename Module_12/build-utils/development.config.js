const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => ({
  devtool: "cheap-eval-source-map",

  devServer: {
    compress: true,
    stats: "errors-only",
    historyApiFallback: true,
    quiet: true,
    noInfo: true,
    open: true,
    clientLogLevel: "warning"
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
});
