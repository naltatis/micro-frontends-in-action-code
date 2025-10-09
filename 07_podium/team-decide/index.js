import express from "express";
import morgan from "morgan";
import Layout from "@podium/layout";

const layout = new Layout({
  name: "product",
  pathname: "/product",
  development: true
});

const recos = layout.client.register({
  name: "recos",
  uri: "http://localhost:3002/recos/manifest.json",
  timeout: 500
});

const app = express();
app.use(morgan("dev"));
app.use(layout.middleware());
app.use("/static", express.static("./static"));

layout.css([
  { value: "http://localhost:3001/static/page.css" },
  { value: "http://localhost:3001/static/outlines.css" }
]);

const products = {
  porsche: "Porsche-Diesel Master 419",
  fendt: "Fendt F20 Dieselroß",
  eicher: "Eicher Diesel 215/16"
};

app.get(`/product/:sku`, async (req, res, next) => {
  const sku = req.params.sku;
  const title = products[sku];
  const incoming = res.locals.podium;

  const recoResponse = await recos.fetch(incoming, { query: { sku } });

  incoming.podlets = [recoResponse];
  incoming.view = { title };

  res.status(200).podiumSend(`
    <section class="decide_layout">
      <h1 class="decide_header">The Tractor Store</h1>
      <div class="decide_product">
        <h2 class="decide_headline">${title}</h2>
        <img class="decide_image" src="https://mi-fr.org/img/${sku}.svg" />
      </div>
      <aside class="decide_recos">${recoResponse}</aside>
    </section>
  `);
});

app.listen(3001);
