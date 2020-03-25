import React from "react";

// in a real application this data would be fetched from Team Inspire's API
const recos = {
  fendt: ["eicher", "porsche"],
  eicher: ["porsche", "fendt"],
  porsche: ["fendt", "eicher"]
};

export default function({ sku }) {
  if (!sku) {
    return null;
  }
  return (
    <div className="inspire_fragment">
      <h2 className="inspire_headline">Recommendations</h2>
      <div className="inspire_recommendations">
        {recos[sku].map(key => (
          <a href={`http://localhost:3001/product/${key}`} key={key}>
            <img
              src={`https://mi-fr.org/img/${key}.svg`}
              width="100"
              height="100"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
