const { log, error } = console;

const init = (app, config) => {
	// make sure a mongo url is passed.
	if (config.MONGO_URL) {
		app.listen(config.PORT, () => {
			log(`App running on port ${config.PORT}`);
		});
	} else {
		app.all("*", (req, res) => {
			res.send("MONGO_URL not configured. See documentation.");
		});

		app.listen(config.PORT, () => {
			error(`Please add your MONGO_URL. See documentation`);
		});
	}
};

module.exports = init;
