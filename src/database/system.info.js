const DB_TABLES = {
  user_tasks: "user_tasks",
};

const DB_NAME = process.env.MONGO_DB_NAME;

module.exports = {
  DB_NAME,
  DB_TABLES,
};
