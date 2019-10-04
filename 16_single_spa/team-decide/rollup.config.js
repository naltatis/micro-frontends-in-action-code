import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import nodeResolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

export default {
  input: "pages.jsx",
  output: {
    file: "pages.min.js",
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
