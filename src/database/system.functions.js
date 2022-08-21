const { getDatabase } = require("./system.database");

// https://docs.mongodb.com/manual/reference/method/ObjectId/
const { ObjectID } = require("mongodb");
const getUserName = require("git-user-name");

function getDate() {
	return new Date().toLocaleString();
}

async function insertInto(table_name, value) {
	const database = await getDatabase();

	// this is for development purpuses. If there is a addedBy = gitusername then this is dev.
	value.addedBy = getUserName();
	value.addedAt = getDate();
	value.updatedAt = null;

	// for `insertOne` info, see https://docs.mongodb.com/manual/reference/method/js-collection/
	const { insertedId } = await database
		.collection(table_name, value)
		.insertOne(value);

	return insertedId;
}

async function selectFrom(table_name) {
	const database = await getDatabase();
	// `find` https://docs.mongodb.com/manual/reference/method/db.collection.find/#db.collection.find
	return await database.collection(table_name).find({}).toArray();
}

async function deleteFrom(table_name, id) {
	const database = await getDatabase();
	// https://docs.mongodb.com/manual/reference/method/ObjectId/
	// for `deleteOne` info see  https://docs.mongodb.com/manual/reference/method/js-collection/
	await database.collection(table_name).deleteOne({
		_id: new ObjectID(id),
	});
}

async function updateSet(table_name, id, new_value) {
	const database = await getDatabase();

	// timestamp this event
	new_value.updatedAt = getDate();

	// `delete` is new to you. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
	delete new_value._id;

	// https://docs.mongodb.com/manual/reference/method/db.collection.update/
	await database.collection(table_name).update(
		{ _id: new ObjectID(id) },
		{
			$set: {
				...new_value,
			},
		}
	);
}

// export the functions that can be used by the main app code
module.exports = {
	insertInto,
	deleteFrom,
	selectFrom,
	updateSet,
};
