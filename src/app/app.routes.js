const app = require("./app.middleware");
const routes = require("../routes");

app.use('/', routes.app)
app.use("/api/tasks", routes.tasks);


module.exports = app;
