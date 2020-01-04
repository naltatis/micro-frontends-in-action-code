import React from "react";

const names = {
  porsche: "Porsche-Diesel Master 419",
  fendt: "Fendt F20 Dieselroß",
  eicher: "Eicher Diesel 215/16"
};

export default function({ sku }) {
  const name = names[sku];
  window.document.title = name;
  return (
    <div className="decide_layout">
      <h1 className="decide_header">The Tractor Store</h1>
      <div className="decide_product">
        <h2 className="decide_headline">{name}</h2>
        <img
          className="decide_image"
          src={`https://mi-fr.org/img/${sku}_standard.svg`}
          width="100"
          height="100"
        />
      </div>
      <div className="decide_details">
        <checkout-buy sku={sku}></checkout-buy>
      </div>
      <aside className="decide_recos">
        <inspire-recommendations sku={sku}></inspire-recommendations>
      </aside>
    </div>
  );
}
