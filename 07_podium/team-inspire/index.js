const express = require("express");
const morgan = require("morgan");
const Podlet = require("@podium/podlet");

const podlet = new Podlet({
  name: "recos",
  version: "1.0.2",
  pathname: "/recos",
  fallback: "/fallback",
  development: true
});
podlet.css({
  value: "http://localhost:3002/static/fragment.css"
});

const app = express();
app.use(morgan("dev"));
app.use("/recos", podlet.middleware());
app.use("/static", express.static("./static"));

app.get("/recos/manifest.json", (req, res) => {
  res.status(200).json(podlet);
});

const recos = {
  fendt: ["eicher", "porsche"],
  eicher: ["porsche", "fendt"],
  porsche: ["fendt", "eicher"]
};

app.get("/recos", (req, res) => {
  const { sku } = req.query;
  res.status(200).podiumSend(`
    <div class="inspire_fragment">
      <h2 class="inspire_headline">Recommendations</h2>
      <div class="inspire_recommendations">
        ${recos[sku]
          .map(
            reco => `
              <a href="http://localhost:3001/product/${reco}">
                <img src="https://mi-fr.org/img/${reco}.svg" />
              </a>`
          )
          .join("\n")}
      </div>
    </div>
  `);
});

app.get("/recos/fallback", (req, res) => {
  res.status(200).podiumSend(`
    <a href="http://localhost:3002/recos">
      Show Recommendations
    </a>
  `);
});

app.listen(3002);
