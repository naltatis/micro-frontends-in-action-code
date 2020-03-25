const routes = {
  "/checkout/cart": () => `
    <a href="/">&lt; home</a> -
    <a href="/checkout/pay">pay &gt;</a>
    <h1>🛒 Cart</h1>
    <a href="/product/eicher">
      Eicher Diesel 215/16<br>
      <img src="https://mi-fr.org/img/eicher.svg" width="100">
    </a>`,
  "/checkout/pay": () => `
    <a href="/checkout/cart">&lt; cart</a> -
    <a href="/checkout/success">buy now &gt;</a>
    <h1>💵 Pay</h1>`,
  "/checkout/success": () => `
    <a href="/">home &gt;</a>
    <h1>🥳 Success</h1>`
};

class CheckoutPages extends HTMLElement {
  connectedCallback() {
    console.log("checkout-pages connectedCallback");
    this.render(window.location);
    this.unlisten = window.appHistory.listen(location => {
      console.log("checkout-pages appHistory.listen");
      this.render(location);
    });
  }
  render(location) {
    console.log("route change (second level / checkout)");
    const route = routes[location.pathname];
    if (route) {
      this.innerHTML = route();
    }
  }
  disconnectedCallback() {
    console.log("checkout-pages disconnectedCallback");
    this.unlisten();
  }
}

window.customElements.define("checkout-pages", CheckoutPages);
