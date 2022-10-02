const routes = {
	app: require("./app.routes"),
	signIn: require('./auth.signIn.routes'),
	signUp:require('./auth.signUp.routes'),
	tasks: require("./tasks.routes"),
	urls: require("./url.shortner.routes"),
};

module.exports = routes;
