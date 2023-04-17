const mongoose = require("mongoose");
const productschema = new mongoose.Schema({
  email: String,
  password: Number,
});

const userschema = new mongoose.Schema({
  email: String,
  password: String,
});

const usermodel = mongoose.model("user", userschema);
const secondmodel = mongoose.model("product", productschema);
module.exports = { usermodel, secondmodel };
