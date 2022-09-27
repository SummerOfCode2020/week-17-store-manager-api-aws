const routes = {
	app: require("./app.routes"),
	auth: {
		register: require("./auth.signUp.routes"),
		login: require("./auth.signIn.routes"),
	},
	signIn: require('./auth.signIn.routes'),
	signUp:require('./auth.signUp.routes'),
	tasks: require("./tasks.routes"),
	urls: require("./url.shortner.routes"),
};

module.exports = routes;
