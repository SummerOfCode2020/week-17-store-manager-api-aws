const app = require("./app.middleware");
const routes = require("../routes");
// const { checkJwt } = require("../auth");

app.use("/", routes.app);
app.use("/api/tasks", routes.tasks);
app.use("/api/urls", routes.urls);
app.use("/api/auth", routes.auth);

module.exports = app;
