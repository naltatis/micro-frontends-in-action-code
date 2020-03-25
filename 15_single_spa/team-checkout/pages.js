import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import singleSpaVue from "single-spa-vue";

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: h => h(App),
    router,
    el: "#app-checkout"
  }
});

export const { bootstrap, mount, unmount } = vueLifecycles;
