// in a real application this data would be fetched from Team Inspire's API
const recos = {
  fendt: ["eicher", "porsche"],
  eicher: ["porsche", "fendt"],
  porsche: ["fendt", "eicher"]
};

class InspireRecommendations extends HTMLElement {
  static get observedAttributes() {
    return ["sku"];
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    this.render();
  }
  render() {
    const sku = this.getAttribute("sku");
    this.innerHTML = `
      <div class="inspire_fragment">
        <h2 class="inspire_headline">Recommendations</h2>
        <div class="inspire_recommendations">
          ${recos[sku]
            .map(
              reco => `<a href="http://localhost:3001/product/${reco}">
                         <img src="https://mi-fr.org/img/${reco}.svg" />
                       </a>`
            )
            .join("\n")}
        </div>
      </div>
    `;
  }
}
window.customElements.define(
  "inspire-recommendations",
  InspireRecommendations
);
