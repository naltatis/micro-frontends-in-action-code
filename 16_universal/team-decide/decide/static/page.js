(function editions() {
  const platinum = document.querySelector(".decide_editions input");
  const image = document.querySelector(".decide_image");
  const buyButton = document.querySelector("checkout-buy");

  platinum.addEventListener("change", e => {
    const edition = e.target.checked ? "platinum" : "standard";
    buyButton.setAttribute("edition", edition);
    image.src = image.src.replace(/(standard|platinum)/, edition);
  });

  const element = document.querySelector(".decide_product");
  buyButton.addEventListener("checkout:item_added", e => {
    element.classList.add("decide_product--confirm");
  });
  element.addEventListener("animationend", () => {
    element.classList.remove("decide_product--confirm");
  });
})();
