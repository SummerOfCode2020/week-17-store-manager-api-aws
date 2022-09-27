const router = require("express").Router();
const { info } = require("../database");

const appInfo = [info.DB_NAME, info.DB_TABLES];

router.get("/", (_, res) => {
	res.send(appInfo);
});

module.exports = router;
