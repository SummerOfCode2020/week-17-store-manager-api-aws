const app = require("./app.middleware");

app.get("/", async (req, res) => {
  res.send({
    message: "Storefront API. See documentation for use.",
  });
});

app.use("/products", require("../routes/productsRoutes"));
app.use("/logos", require("../routes/logosRoutes"));
app.use("/stores", require("../routes/storesRoutes"));
app.use("/categories", require("../routes/categoriesRoutes"));
app.use("/product-types", require("../routes/product-typesRoutes"));
app.use("/variations", require("../routes/variationsRoutes"));
app.use("/api/tasks", require("../routes/tasksRoutes"));

module.exports = app;
