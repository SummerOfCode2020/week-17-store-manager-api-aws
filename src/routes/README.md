# Routes

This is where we create and export all the routes to handle api requests at the different endoints. 

NOTE: at this point, the route is not mounted yet. You need to go to `../app/app.routes.js` to mount them. See App ReadME.

> How to Create a Route

```js 
const router = require("express").Router();
const { info } = require("../database");

const appInfo = {
  database: {
    name: info.DB_NAME,
    tables: info.DB_TABLES,
  },
};

router.get("/", (req, res) => {
  res.send(appInfo);
});

module.exports = router;
```

> Exporting the new route
```js
// file ./index.js
const routes = {
    tasks: require('./tasks.routes'),
    app: require('./app.routes')
}

module.exports = routes
```
> Adding Route to App

See `./app/README.md`