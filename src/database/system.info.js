const DB_TABLES = {
	user_tasks: "user_tasks",
	url_shortner: "url_shortner",
	users: "users",
};

const DB_NAME = process.env.MONGO_DB_NAME || "DEV_DB";

module.exports = {
	DB_NAME,
	DB_TABLES,
	tables: DB_TABLES,
};
