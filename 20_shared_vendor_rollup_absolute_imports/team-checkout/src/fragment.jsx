import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button.jsx";
import "./fragment.css";

class CheckoutBuy extends HTMLElement {
  static get observedAttributes() {
    return ["sku"];
  }
  connectedCallback() {
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

console.log(`Team Checkout - React v${React.version}`);
