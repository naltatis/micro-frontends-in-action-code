import React from "react";
import ReactDOM from "react-dom";
import Recommendations from "./Recommendations.jsx";
import "./fragment.css";

class InspireRecommendations extends HTMLElement {
  static get observedAttributes() {
    return ["sku"];
  }
  connectedCallback() {
    this.setAttribute("data-version", `Inspire (React v${React.version})`);
    this.render();
  }
  attributeChangedCallback() {
    this.render();
  }
  render() {
    const sku = this.getAttribute("sku");
    ReactDOM.render(<Recommendations sku={sku} />, this);
  }
  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.el);
  }
}
window.customElements.define(
  "inspire-recommendations",
  InspireRecommendations
);

console.log(`Team Inspire - React v${React.version}`);
