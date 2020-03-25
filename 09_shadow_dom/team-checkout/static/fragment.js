const prices = {
  porsche: 66,
  fendt: 54,
  eicher: 58
};

class CheckoutBuy extends HTMLElement {
  connectedCallback() {
    const sku = this.getAttribute("sku");
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        button {
          width: 100%;
          padding: 0.5em;
          font-size: 1.5em;
          border: none;
          color: white;
          border-radius: 0.25em;
          background: rgb(75, 158, 204);
          text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          transition: transform 0.1s ease-in-out;
        }

        button:hover {
          background: rgb(75, 158, 204, 0.8);
        }

        button:active {
          background: gray;
          transform: scale(0.98);
        }
      </style>
      <button type="button">buy for ${prices[sku]} $</button>
    `;
    this.shadowRoot
      .querySelector("button")
      .addEventListener("click", () => {
        alert("Thank you ❤️");
      });
  }
  disconnectedCallback() {
    this.shadowRoot.querySelector("button").removeEventListener("click");
  }
}
window.customElements.define("checkout-buy", CheckoutBuy);
