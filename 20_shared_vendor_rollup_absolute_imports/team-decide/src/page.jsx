import React from "react";
import ReactDOM from "react-dom";
import ProductPage from "./ProductPage.jsx";
import "./page.css";
import "./outlines.css";

class DecideProductPage extends HTMLElement {
  connectedCallback() {
    this.setAttribute("data-version", `Decide (React v${React.version})`);
    this.render();
    this.addEventListener("click", this.handleNavigation);
  }
  handleNavigation(e) {
    const a = e.target.closest("a");
    if (a) {
      window.history.pushState({}, "", a.href);
      this.render();
      e.preventDefault();
    }
  }
  render() {
    const [pathname, sku] = window.location.pathname.match("product/(.*)");
    if (sku) {
      ReactDOM.render(<ProductPage sku={sku} />, this);
    }
  }
  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.el);
    this.removeEventListener("click", this.handleNavigation);
  }
}
window.customElements.define("decide-product-page", DecideProductPage);

console.log(`Team Decide - React v${React.version}`);
