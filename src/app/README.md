# IMPORTANT!!!!

The app has been broken up into three sections. They might seem confusing at first, but you will get the hang of it.

## Sections:

`app.js` is where we initiate the app and then export it. Nothing more. Just the app. This was done so to separate the different parts of the application and to make development much more easy.

```js
const express = require("express");

// defining the Express app
const app = express();

module.exports = app;
```

## HOW TO ? ->

- To add a new middleware > Navigate to ``` ./src/app/app.middleware ```
- To add a new route > Navigate to ``` ./src/app/app.routes.js ```




