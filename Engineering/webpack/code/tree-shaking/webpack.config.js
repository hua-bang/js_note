const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: resolve(__dirname, "dist"),
    filename: "main.js"
  },
  target: 'web',
  devtool: "source-map",
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.css$/,
            use: ["style-loader","css-loader"]
          },
          {
            test: /\.(jpg|png|gif)$/,
            loader: "url-loader",
            options: {
              esModule: false
            }
          },
          {
            test: /\.html$/,
            loader: "html-withimg-loader"
          }
        ]
      }
    ]
  },
  plugins: [
  ],
  mode: "production",
  devServer: {
    contentBase: resolve(__dirname, "dist"),
    // gzip 压缩
    compress: true,
    port: 4031,
    hot: true
  }
};