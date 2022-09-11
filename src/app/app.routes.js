const app = require("./app.middleware");
const routes = require("../routes");
const middleware = require("../middleware");

app.use("/", routes.app);
app.use("/api/tasks", middleware.verifyToken, routes.tasks);
app.use("/api/urls", routes.urls);
app.use("/api/auth", routes.auth.register);
app.use("/api/auth", routes.auth.login);

module.exports = app;
