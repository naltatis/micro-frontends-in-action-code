import singleSpaSvelte from "single-spa-svelte";
import Homepage from "./Homepage.svelte";

const svelteLifecycles = singleSpaSvelte({
  component: Homepage,
  domElementGetter: () => document.getElementById("app-inspire")
});

export const { bootstrap, mount, unmount } = svelteLifecycles;
