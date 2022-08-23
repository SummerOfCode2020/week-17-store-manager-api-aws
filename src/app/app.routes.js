const app = require("./app.middleware");
const routes = require("../routes");
// const { checkJwt } = require("../auth");

app.use("/", routes.app);
app.use("/api/tasks", routes.tasks);

module.exports = app;
