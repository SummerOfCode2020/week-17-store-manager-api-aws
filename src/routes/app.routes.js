const router = require("express").Router();
const { info } = require("../database");

const appInfo = {
  database: {
    name: info.DB_NAME,
    tables: info.DB_TABLES,
  },
};

router.get("/", (_, res) => {
  res.send(appInfo);
});

module.exports = router;
