const prices = {
  porsche: { standard: 66, platinum: 966 },
  fendt: { standard: 54, platinum: 945 },
  eicher: { standard: 58, platinum: 958 }
};

class CheckoutBuy extends HTMLElement {
  static get observedAttributes() {
    return ["sku", "edition"];
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }
  attributeChangedCallback() {
    this.render();
  }
  render() {
    const sku = this.getAttribute("sku");
    const edition = this.getAttribute("edition") || "standard";
    this.shadowRoot.innerHTML = `
      <style>
        button {
          width: 100%;
          padding: 0.5em;
          font-size: 1.5em;
          border: none;
          color: white;
          border-radius: .25em;
          background: rgb(28, 184, 65);
          text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
          margin-bottom: 0.65em;
          cursor: pointer;
          transition: transform 0.1s ease-in-out;
        }

        button:hover {
          background: rgb(10, 150, 60);
        }

        button:active {
          background: gray;
          transform: scale(0.98);
        }
      </style>
      <button type="button">buy for ${prices[sku][edition]} $</button>
    `;
    this.shadowRoot
      .querySelector("button")
      .addEventListener("click", () => {
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
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
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
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          text-align: center;
        }

        img {
          width: 80px;
          height: 80px;
          display: inline-block;
          vertical-align: middle;
        }
      </style>
      ${text} ${tractors}
    `;
  }
}
window.customElements.define("checkout-minicart", CheckoutMinicart);
