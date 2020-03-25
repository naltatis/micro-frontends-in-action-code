const path = require("path");
const webpack = require("webpack");
const { dependencies } = require("./package.json");

const version = dependencies.react.substr(1);
const majorVersion = version.split(".")[0];

module.exports = {
  context: process.cwd(),
  mode: "production",
  entry: { react: ["react", "react-dom"] },
  output: {
    filename: `[name]_${majorVersion}.js`,
    path: path.resolve(__dirname, "./static"),
    library: "[name]_[hash]"
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      name: "[name]_[hash]",
      path: path.resolve(__dirname, `manifest_${majorVersion}.json`)
    })
  ]
};
