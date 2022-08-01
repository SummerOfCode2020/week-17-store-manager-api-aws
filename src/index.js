const app = require("./app");
const { startDatabase } = require("./database/system.functions");
const port = process.env.PORT || 3001;
const MONGO_URL = process.env.MONGO_URL;

function init(app) {
  if (MONGO_URL) {
    startDatabase().then(async () => {
      // `then` start the web server after the database starts
      app.listen(port, async () => {
        console.log(`Web server has started on port http://localhost:${port}`);
      });
    });
  } else {
    // endpoint to return top level api
    // much like a switch statement
    app.all("*", async (req, res) => {
      res.send({
        message: "MONGO_URL not configured. See documentation.",
      });
    });

    app.listen(port, async () => {
      console.log(`Web server has started on port ${port}`);
    });
  }
}

init(app);
