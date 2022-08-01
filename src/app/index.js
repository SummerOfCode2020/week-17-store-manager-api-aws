const app = require("./app.routes");

// we export it from an index file to avoid redundancy in /app/app.js
// now we can do /app/ when importing it

module.exports = app;
