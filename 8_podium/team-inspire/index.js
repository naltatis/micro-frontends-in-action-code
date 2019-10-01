const express = require("express");
const morgan = require("morgan");
const Podlet = require("@podium/podlet");

const podlet = new Podlet({
  name: "recos",
  version: "1.0.2",
  pathname: "/recos",
  fallback: "/fallback"
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

app.get("/recos", (req, res) => {
  res.status(200).podiumSend(`
    <h2 class="inspire_headline">Recommendations</h2>
    <div class="inspire_recommendations">
      <a href="http://localhost:3001/product">
        <img src="https://mi-fr.org/img/fendt.svg" />
      </a>
      <a href="http://localhost:3001/product">
        <img src="https://mi-fr.org/img/eicher.svg" />
      </a>
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
