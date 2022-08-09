const init = require("./server");
const app = require("./app");

const config = {
	PORT: process.env.PORT || 3001,
	MONGO_URL: process.env.MONGO_URL,
};

init(app, config);
