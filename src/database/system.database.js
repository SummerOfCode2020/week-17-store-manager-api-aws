/**
All configuration that is required for a shared MongoDB server
hosted in the cloud https://www.mongodb.com/
*/

const { MongoClient } = require("mongodb");
const mongoDBURL = process.env.MONGO_URL;
const mongoConfig = {
	useNewUrlParser: true,
	useUnifiedTopology: true
};

async function getDatabase() {
	let database;
	const connection = await MongoClient.connect(`${mongoDBURL}`, mongoConfig);
	database = connection.db();
	return database;
}

module.exports = {
	getDatabase,
};
