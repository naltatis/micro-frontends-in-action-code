const products = {
  porsche: { name: "Porsche-Diesel Master 419", img: "porsche.svg" },
  fendt: { name: "Fendt F20 Dieselroß", img: "fendt.svg" },
  eicher: { name: "Eicher Diesel 215/16", img: "eicher.svg" }
};

class DecidePages extends HTMLElement {
  connectedCallback() {
    this.render(window.location);
    this.unlisten = window.appHistory.listen(location =>
      this.render(location)
    );
  }
  render(location) {
    console.log("route change (second level / decide)");
    const match = location.pathname.match("/product/(.*)");
    const product = match && products[match[1]];
    if (product) {
      this.innerHTML = `
        <a href="/">&lt; home</a> -
        <a href="/checkout/cart">view cart &gt;</a>
        <h1>${product.name}</h1>
        <img src="https://mi-fr.org/img/${product.img}" width="200">
      `;
    }
  }
  disconnectedCallback() {
    this.unlisten();
  }
}

window.customElements.define("decide-pages", DecidePages);
