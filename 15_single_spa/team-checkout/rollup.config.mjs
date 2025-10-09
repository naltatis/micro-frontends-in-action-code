import vue from "rollup-plugin-vue";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";

export default {
  input: "pages.js",
  output: {
    file: "pages.min.js",
    format: "esm",
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true,
    }),
    vue(),
    nodeResolve(),
  ],
};
