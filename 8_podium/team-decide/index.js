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

app.get(layout.pathname(), async (req, res, next) => {
  const recoResponse = await recos.fetch(res.locals.podium);

  res.send(`
    <html>
    <head>
      <title>Porsche-Diesel Master 419</title>
      <link href="/static/page.css" rel="stylesheet" />
      ${recoResponse.css
        .map(css => `<link href="${css.value}" rel="stylesheet" />`)
        .join("\n")}
    </head>
    <body class="decide_layout">
      <h1 class="decide_header">The Tractor Store</h1>
      <div class="decide_product">
        <h2 class="decide_headline">Porsche-Diesel Master 419</h2>
        <img class="decide_image" src="https://mi-fr.org/img/porsche.svg" />
      </div>
      <aside class="decide_recos">${recoResponse}</aside>
    </body>
    </html>
  `);
});

app.listen(3001);
