/** 
we create an object to expose
ideally, never export outside the folder; 
use an index.js file to expose the database management system
*/

const database = {
	info: require("./system.info"),
	functions: require("./system.functions"),
	config: require("./system.database"),
};

module.exports = database;