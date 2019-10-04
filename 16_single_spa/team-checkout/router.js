import Vue from "vue";
import Router from "vue-router";
import Cart from "./Cart.vue";
import Pay from "./Pay.vue";
import Success from "./Success.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/checkout/cart",
      component: Cart
    },
    {
      path: "/checkout/pay",
      component: Pay
    },
    {
      path: "/checkout/success",
      component: Success
    }
  ]
});
