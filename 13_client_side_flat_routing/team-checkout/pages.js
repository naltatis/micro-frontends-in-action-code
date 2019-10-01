class CheckoutCart extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <a href="/">&lt; home</a> -
      <a href="/checkout/pay">pay &gt;</a>
      <h1>🛒 Cart</h1>
      <a href="/product/eicher">
        Eicher Diesel 215/16<br>
        <img src="https://mi-fr.org/img/eicher.svg" width="100">
      </a>`;
  }
}
window.customElements.define("checkout-cart", CheckoutCart);

class CheckoutPay extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <a href="/checkout/cart">&lt; cart</a> -
      <a href="/checkout/success">buy now &gt;</a>
      <h1>💵 Pay</h1>`;
  }
}
window.customElements.define("checkout-pay", CheckoutPay);

class CheckoutSuccess extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <a href="/">home &gt;</a>
      <h1>🥳 Success</h1>`;
  }
}
window.customElements.define("checkout-success", CheckoutSuccess);
