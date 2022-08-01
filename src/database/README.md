# Database Management System

Database Management Systems (DBMS) are used to store, retrieve, and run queries on data. A DBMS serves as an interface between an end-user and a database, allowing users to create, read, update, and delete data in the database.

### Approach

Create global tools that mimick mssql database management system. We have created a folder structure similar to a sql database where we have a global `insertInto(table_name, value)` function, and same for the other crud operations.

<hr />

## Info 
`system.info.js` has the information about the database. This information and more is accessible at home endpoint [http://localhost:3001/](http://localhost:3001/)


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

`system.config.js` is where you will find all configuration that is required for a shared mongo server hosted in the cloud.

sniptit

```js
const { MongoClient } = require("mongodb");

let database = null;
const mongoDBURL = process.env.MONGO_URL;
const DB_NAME = process.env.MONGO_DB_NAME || "development";

async function startDatabase() {
  const connection = await MongoClient.connect(mongoDBURL, {
    useNewUrlParser: true,
    dbName: DB_NAME,
  });
  database = connection.db();
}

async function getDatabase() {
  if (!database) await startDatabase();
  return database;
}

module.exports = {
  getDatabase,
  startDatabase,
};
```

## Functions

`system.functions.js` export the functions necessary for create, retrieve, delete, update data in database.

```js
// Functions & Params
insertInto(table_name, value);
selectFrom(table_name);
updateSet(table_name, id, new_value);
deleteFrom(table_name, id);
```
