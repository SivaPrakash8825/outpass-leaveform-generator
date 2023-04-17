const express = require("express");

const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

mongoose
  .connect("mongodb://127.0.0.1:27017/siva")
  .then(() => {
    console.log("connect");
  })
  .catch((e) => {
    console.log(e);
  });
app.use(cookieparser());
app.use("/login", require("../server/routers/auth"));

app.listen(3030, () => {
  console.log("3030");
});
