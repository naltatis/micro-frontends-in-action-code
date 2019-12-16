'use strict';

const express = require("express");
const morgan = require("morgan");
const Layout = require("@podium/layout");

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
  { value: '/static/page.css' },
  { value: '/static/outlines.css' },
]);

app.get(layout.pathname(), async (req, res, next) => {
  const incoming = res.locals.podium;

  const response = await Promise.all([
    recos.fetch(incoming),
  ]);

  incoming.podlets = response;
  incoming.view = {
    title: 'Porsche-Diesel Master 419',
  };

  res.status(200).podiumSend(`
    <section class="decide_layout">
      <h1 class="decide_header">The Tractor Store</h1>
      <div class="decide_product">
        <h2 class="decide_headline">Porsche-Diesel Master 419</h2>
        <img class="decide_image" src="https://mi-fr.org/img/porsche.svg" />
      </div>
      <aside class="decide_recos">${response[0]}</aside>
    </section>
  `);
});

app.listen(3001);
