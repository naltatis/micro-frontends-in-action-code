import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import nodeResolve from "rollup-plugin-node-resolve";
import VuePlugin from "rollup-plugin-vue";
import alias from "rollup-plugin-alias";

export default {
  input: "pages.js",
  output: {
    file: "pages.min.js",
    format: "esm"
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    VuePlugin(),
    alias({
      vue: require.resolve("vue/dist/vue.esm.js")
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ]
};
