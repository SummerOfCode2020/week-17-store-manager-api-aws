const router = require("express").Router();
const { info } = require("../database");
const {
	insertInto,
	selectFrom,
	updateSet,
	deleteFrom,
} = require("../database/system.functions");

const table_name = require("../database/system.info").DB_TABLES.url_shortner;

const { shortenUrl } = require("../utils/shorten-url");

// select all urls in database
router.get("/", async (req, res) => {
	res.send({
		message: "All urls in database, at least for this user",
		payload: await selectFrom(table_name, { long_url: req.body.long_url }),
	});
});

router.post("/", async (req, res) => {
	/** long_url is required */

	if (req.body.long_url) {
		// check if the long_url is already in the database

		await insertInto(table_name, {
			long_url: req.body.long_url,
			short_url: await shortenUrl(req.body.long_url),
			times_visited: 0,
			author: req.body.author || null,
		}).then(async () => {
			res.send({
				message: "Url was inserted into the database",
				payload: await selectFrom(table_name),
			});
		});
	}
});

router.delete("/:_id", async (req, res) => {
	await deleteFrom(table_name, req.params._id).then(async () => {
		res.send({
			message: "Url hard deleted from database.",
			payload: await selectFrom(table_name),
		});
	});
});

// endpoint to update an URL
router.put("/:_id", async (req, res) => {
	await updateSet(table_name, req.params._id, req.body).then(async () => {
		res.send({
			message: "Url updated successfully.",
			payload: await selectFrom(table_name),
		});
	});
});

module.exports = router;
