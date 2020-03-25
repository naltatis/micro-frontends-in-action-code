import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import nodeResolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import css from "rollup-plugin-css-only";
import alias from "@rollup/plugin-alias";

export default {
  input: "src/page.jsx",
  output: {
    file: "static/decide.js",
    format: "esm"
  },
  plugins: [
    alias({
      entries: [
        {
          find: "react",
          replacement: __dirname + "/external/react.js"
        },
        {
          find: "react-dom",
          replacement: __dirname + "/external/react-dom.js"
        }
      ]
    }),
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
    }),
    css()
  ]
};
