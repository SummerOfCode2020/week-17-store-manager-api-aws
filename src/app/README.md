# IMPORTANT!!!!

This folder is where the app gets mounted and configured with everything it needs. Remember, keep it simple and organized.

<hr />

## Sections:

### App

File:./`app.js` is where we instanciate the app and then export it. Nothing more. Just the app. This approach aims separates the different parts of the application to make development and debuging much more easy.

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

File:./`app.routes.js` is where we manage the `/api/endpoints` of the application. This is the mapping for how the user will interact with the backend via HTTP methods such as GET, DELETE, PUT, and a few other more See [HTTP request methods
by ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).
