const router = require("express").Router();
const { info } = require("../database");

const appInfo = {
	db_name: info.DB_NAME,
	db_table: info.DB_TABLES,
};

router.get("/", (_, res) => {
	res.send(appInfo);
});

module.exports = router;
