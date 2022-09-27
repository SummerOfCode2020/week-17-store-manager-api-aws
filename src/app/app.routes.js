const app = require("./app.middleware");
const routes = require("../routes");
const { verifyToken } = require("../auth");

app.use("/", routes.app);
app.use("/api/tasks", verifyToken, routes.tasks);
app.use("/api/urls", routes.urls);

// does not need to verify token as this route is where we authenticate
app.use('/api/auth/sign-in', routes.signIn)
app.use('/api/auth/sign-up', routes.signUp)

module.exports = app;
