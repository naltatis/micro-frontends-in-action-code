const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./src/page.jsx",
  mode: "production",
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: path.resolve(__dirname, "static"),
    publicPath: "/static/",
    filename: "decide.js"
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: path.join(__dirname),
      manifest: require("shared-vendor/manifest_16.json"),
      sourceType: "var"
    })
  ]
};
