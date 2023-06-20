const route = require("express").Router();

route.get("/api/main", (req, res) => {
  res.send(
    "<h1>Express is framework that allows us write more clean and easy code.It has more features compare to http module</h1>"
  );
});

module.exports = route;
