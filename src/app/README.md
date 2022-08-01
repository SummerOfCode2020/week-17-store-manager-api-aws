# IMPORTANT!!!!

This folder is where the app gets mounted and configured with everything it needs. This is not where everything is created. That is outsourced to a different folder. Remember, keep it simple and organized.

<hr />

## Sections:

### App

`app.js` is where we initiate the app and then export it. Nothing more. Just the app. This was done so to separate the different parts of the application and to make development much more easy.

```js
const express = require("express");

// defining the Express app
const app = express();

module.exports = app;
```

## Middleware

`app.middleware.js` is where we import and apply all necessary middleware for this app. Only here.

```js
// app
const app = require("./app");

// deps
const { json } = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

// apply deps to app
app.use(helmet());
app.use(json());
app.use(cors());
app.use(morgan("combined"));

// export app
module.exports = app;
```

## Router

`app.routes.js` This is where we manage the `/endpoints` of the application. This is the mapping for how the user will interact with the backend.
