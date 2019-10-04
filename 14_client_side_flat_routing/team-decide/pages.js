const template = product => {
  return `
    <a href="/">&lt; home</a> -
    <a href="/checkout/cart">view cart &gt;</a>
    <h1>${product.name}</h1>
    <img src="https://mi-fr.org/img/${product.img}" width="200">
  `;
};

class DecideProductPorsche extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template({
      name: "Porsche-Diesel Master 419",
      img: "porsche.svg"
    });
  }
}
window.customElements.define(
  "decide-product-porsche",
  DecideProductPorsche
);

class DecideProductFendt extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template({
      name: "Fendt F20 Dieselroß",
      img: "fendt.svg"
    });
  }
}
window.customElements.define("decide-product-fendt", DecideProductFendt);

class DecideProductEicher extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template({
      name: "Eicher Diesel 215/16",
      img: "eicher.svg"
    });
  }
}
window.customElements.define("decide-product-eicher", DecideProductEicher);
