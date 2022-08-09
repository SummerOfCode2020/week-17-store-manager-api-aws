const router = require("express").Router();
const { info } = require("../database");

const appInfo = {
  database: {
    name: info.DB_NAME,
    tables: info.DB_TABLES,
  },
};

router.get("/", (req, res) => {
  res.send(appInfo);
});

module.exports = router;
