const express = require("express");
const route = require("./route");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(route);

app.listen(PORT, () => {
  try {
    console.log(`Server is running on ${PORT}`);
  } catch (err) {
    console.log(err);
  }
});
