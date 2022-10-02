# Database Management System

Database Management Systems (DBMS) are used to store, retrieve, and run queries on data. A DBMS serves as an interface between an end-user and a database, allowing users to create, read, update, and delete data in the cloud server.

### Approach

Create global tools that mimick mssql database management system. We have a folder structure similar to a sql database where we have a global set of key worded functions to do crud operations.

<hr />

## Info 
File:./`system.info.js` has the information about the database. This information and more is accessible at home endpoint [http://localhost:3001/](http://localhost:3001/)


```js
const DB_TABLES = {
  user_tasks: "user_tasks",
};

const DB_NAME = process.env.MONGO_DB_NAME;

module.exports = {
  DB_NAME,
  DB_TABLES,
};
```

## Config

File:./`system.config.js` is where you will find all configuration that is required for a shared mongo server hosted in the cloud.

sniptit

```js
/**
All configuration that is required for a shared MongoDB server
hosted in the cloud https://www.mongodb.com/
*/

const { MongoClient } = require("mongodb");
const mongoDBURL = process.env.MONGO_URL;

const mongoConfig = {
	useNewUrlParser: true,
	dbName: process.env.MONGO_DB_NAME || "test",
};

async function getDatabase() {
	let database;
	const connection = await MongoClient.connect(mongoDBURL, mongoConfig);
	database = connection.db();
	return database;
}

module.exports = {
	getDatabase,
};

```

## Functions

`system.functions.js` export the functions necessary for create, retrieve, delete, update data in database.

```js
// Functions & Params
insertInto(table_name, value);
selectFrom(table_name, {query});
updateSet(table_name, id, new_value);
deleteFrom(table_name, id);
```
## Foreign Keys Handling
Requirenments

- At a global level, the user is a foreign key.
- Each table will automatically enter metadata suchs createdBy, createdDate, updatedAt, updatedBy, and more
