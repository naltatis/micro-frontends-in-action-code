const prices = {
  porsche: { standard: 66, platinum: 966 },
  fendt: { standard: 54, platinum: 945 },
  eicher: { standard: 58, platinum: 958 }
};

class CheckoutBuy extends HTMLElement {
  static get observedAttributes() {
    return ["sku", "edition"];
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    this.render();
  }
  render() {
    const sku = this.getAttribute("sku");
    const edition = this.getAttribute("edition") || "standard";
    this.innerHTML = `
      <button type="button">buy for ${prices[sku][edition]} $</button>
    `;
    this.querySelector("button").addEventListener("click", () => {
      this.dispatchEvent(
        new CustomEvent("checkout:item_added", {
          bubbles: true,
          detail: { sku, edition }
        })
      );
    });
  }
}
window.customElements.define("checkout-buy", CheckoutBuy);

class CheckoutMinicart extends HTMLElement {
  connectedCallback() {
    this.items = [];
    window.addEventListener("checkout:item_added", e => {
      this.items.push(e.detail);
      this.render();
    });
    this.render();
  }
  render() {
    const text =
      this.items.length === 0
        ? "Your cart is empty."
        : `You've picked ${this.items.length} tractors:`;
    const tractors = this.items
      .map(
        ({ sku, edition }) =>
          `<img src="https://mi-fr.org/img/${sku}_${edition}.svg" />`
      )
      .join("");
    this.innerHTML = `${text} ${tractors}`;
  }
}
window.customElements.define("checkout-minicart", CheckoutMinicart);
