// app
const app = require('./app')

// deps
const {json} = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

// apply deps to app
app.use(helmet());
app.use(json());
app.use(cors());
app.use(morgan("combined"));

// export app
module.exports = app
