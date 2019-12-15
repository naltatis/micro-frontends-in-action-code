import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

class CheckoutBuy extends HTMLElement {
  constructor() {
    super();
    this.setAttribute("data-version", `Checkout (React v${React.version})`);
    this.render();
  }
  attributeChangedCallback() {
    this.render();
  }
  render() {
    const sku = this.getAttribute("sku");
    ReactDOM.render(<Button sku={sku} />, this);
  }
  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.el);
  }
}
window.customElements.define("checkout-buy", CheckoutBuy);

console.log("react", React);
