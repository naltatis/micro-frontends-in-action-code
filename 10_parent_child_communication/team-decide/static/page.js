(function editions() {
  const platinum = document.querySelector(".decide_editions input");
  const image = document.querySelector(".decide_image");
  const buyButton = document.querySelector("checkout-buy");

  platinum.addEventListener("change", e => {
    const edition = e.target.checked ? "platinum" : "standard";
    buyButton.setAttribute("edition", edition);
    image.src = image.src.replace(/(standard|platinum)/, edition);
  });
})();
