const router = require("express").Router();
const {
  insertInto,
  selectFrom,
  updateSet,
  deleteFrom,
} = require("../database/system.functions");
const table_name = require("../database/system.info").DB_TABLES.user_tasks;

// select all tasks in database
router.get("/", async (req, res) => {
  res.send({
    message: "All tasks in database, at least for this user",
    payload: await selectFrom(table_name),
  });
});

router.post("/", async (req, res) => {
  const newTask = req.body;
  await insertInto(table_name, newTask).then(async () => {
    res.send({
      message: "Task was inserted into the database",
      payload: await selectFrom(table_name),
    });
  });
});

router.delete("/:storeId", async (apiRequest, apiResponse) => {
  await deleteFrom(table_name, apiRequest.params.storeId);
  apiResponse.send({
    message: "Task hard deleted from database.",
    payload: await selectFrom(table_name),
  });
});

// endpoint to update a Store
router.put("/:storeId", async (apiRequest, apiResponse) => {
  const updatedStore = apiRequest.body;

  await updateSet(table_name, apiRequest.params.storeId, updatedStore);
  apiResponse.send({
    message: "Task new value was set in database.",
    payload: await selectFrom(table_name),
  });
});

module.exports = router;
