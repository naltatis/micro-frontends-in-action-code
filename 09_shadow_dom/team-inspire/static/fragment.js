// in a real application this data would be fetched from Team Inspire's API
const recos = {
  fendt: ["eicher", "porsche"],
  eicher: ["porsche", "fendt"],
  porsche: ["fendt", "eicher"]
};

class InspireRecommendations extends HTMLElement {
  connectedCallback() {
    const sku = this.getAttribute("sku");
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          text-align: center;
        }
        h2 {
          padding-top: 1em;
          font-size: 1em;
          font-weight: normal;
          text-align: center;
          text-transform: uppercase;
          margin: 0;
        }
        a {
          display: inline-block;
          margin: 1rem;
          border: 1px solid #333;
        }
        img {
          max-width: 100%;
          width: 300px;
        }
      </style>
        <h2>Recommendations</h2>
        <div>
          ${recos[sku]
            .map(
              reco => `<a href="http://localhost:3001/product/${reco}">
                         <img src="https://mi-fr.org/img/${reco}.svg" />
                       </a>`
            )
            .join("\n")}
        </div>
    `;
  }
}
window.customElements.define(
  "inspire-recommendations",
  InspireRecommendations
);
