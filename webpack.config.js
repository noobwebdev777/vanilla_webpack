const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports = {
  entry: "./src/js/main.js",
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src/css"), // Only include CSS from src/css
        use: [
          "style-loader", // Injects styles into the DOM
          "css-loader", // Turns CSS into CommonJS
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool: "source-map",
  devServer: {
    hot: true, // Enable HMR
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 5173,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // Path to your index.html
    }),
  ],
};
