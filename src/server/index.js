const init = (app, config) => {
	if (config.MONGO_URL) {
		app.listen(config.PORT, async () => {
			config.callback();
		});
	} else {
		app.all("*", (req, res) => {
			res.send("MONGO_URL not configured. See documentation.");
		});
	}
};

module.exports = init;
