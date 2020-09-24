// This file is: ./src/index.js

//importing the dependencies
const {
  app,
  startDatabase
} = require('./app-common.js');
const { request } = require('express');

// support production deployment on a port configured on the hosting server 
// default to the dev port number otherwise
const port = process.env.PORT || 3001;

const MONGO_URL = process.env.MONGO_URL;

// connect to our database then start the web server
// https://www.mongodb.com/
if (MONGO_URL) {

  // endpoint to return top level api
  // much like a switch statement
  app.get('/', async (req, res) => {
    res.send({
      message: "Storefront API. See documentation for use."
    });
  });

  app.use('/products', require('./routes/productsRoutes'))
  app.use('/logos', require('./routes/logosRoutes'))
  app.use('/stores', require('./routes/storesRoutes'))
  app.use('/categories', require('./routes/categoriesRoutes'))
  app.use('/product-types', require('./routes/product-typesRoutes'))
  app.use('/variations', require('./routes/variationsRoutes'))

  startDatabase().then(async () => {
    // `then` start the web server after the database starts
    app.listen(port, async () => {
      console.log(`Web server has started on port ${port}`);
    });
  });
} else {

  // endpoint to return top level api
  // much like a switch statement
  app.all('*', async (req, res) => {
    res.send({
      message: "MONGO_URL not configured. See documentation."
    });
  });

   app.listen(port, async () => {
      console.log(`Web server has started on port ${port}`);
  });
}
