const routes = {
	app: require("./app.routes"),
	auth: {
		register: require("./auth.register.routes"),
		login: require("./auth.login.routes"),
	},
	tasks: require("./tasks.routes"),
	urls: require("./url.shortner.routes"),
};

module.exports = routes;
