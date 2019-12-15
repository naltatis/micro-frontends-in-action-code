const path = require("path");
const webpack = require("webpack");
const dependencies = require("./package.json").dependencies;

const version = dependencies["react"].substr(1);

module.exports = {
  context: process.cwd(),
  mode: "production",
  entry: { react: ["react", "react-dom"] },
  output: {
    filename: `[name]_${version}.js`,
    path: path.resolve(__dirname, "./static"),
    library: "[name]_[hash]"
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      name: "[name]_[hash]",
      path: path.resolve(__dirname, `manifest_${version}.json`)
    })
  ]
};
