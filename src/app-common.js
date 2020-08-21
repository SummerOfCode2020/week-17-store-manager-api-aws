const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const {startDatabase} = require('./database/mongo-common');
// alternative:
// const mongo = require('./database/mongo-common');
// mongo.startDatabase

// Other entities: Logos, CustomizationOptions, Materials, Patterns

// Bonus items: , Customer info, etc

// defining the Express app
const app = express();

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
// adds a `.body` property to the request so that our
// handler functions can easily work with that incoming data
app.use(bodyParser.json());

// enabling CORS for all requests (not very secure)
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

module.exports = {
  app,
  startDatabase
}

