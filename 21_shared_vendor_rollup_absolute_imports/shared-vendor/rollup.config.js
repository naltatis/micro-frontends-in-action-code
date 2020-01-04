import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import nodeResolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import { dependencies } from "./package.json";

const version = dependencies.react.substr(1);
const majorVersion = version.split(".")[0];

export default {
  input: "src/index.js",
  output: {
    file: `static/react_${majorVersion}.js`,
    format: "esm"
  },
  plugins: [
    nodeResolve(),
    commonjs({
      namedExports: {
        react: ["Component", "createElement"],
        "react-is": ["isValidElementType"]
      }
    }),
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/env", "@babel/preset-react"]
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ]
};
