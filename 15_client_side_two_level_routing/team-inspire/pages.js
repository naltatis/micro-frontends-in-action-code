class InspirePages extends HTMLElement {
  connectedCallback() {
    console.log("inspire-pages connectedCallback");
    this.innerHTML = `
      <h1>Welcome Home!</h1>
      <strong>Here are three tractors:</strong>
      <ul>
        <li><a href="/product/eicher">Eicher</a></li>
        <li><a href="/product/porsche">Porsche</a></li>
        <li><a href="/product/fendt">Fendt</a></li>
      </ul>
    `;
  }
}

window.customElements.define("inspire-pages", InspirePages);
