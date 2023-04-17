const express = require("express");
const app = express();
const port = 9000;
const cors = require("cors");
app.use(express.json());
const mongoose = require("mongoose");
app.use(cors());

const opDetailsModel = require("./Schema/OutpassDetails");

async function checkConnection() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/outpass");
    console.log("Connected");
  } catch (error) {
    console.log("Not Connected :", error.message);
  }
}
checkConnection();

// const data = {
//   name: "jei",
//   department: "CSE",
//   year: "II",
//   dateFrom: new Date(Date.now()),
//   dateTo: new Date(Date.now() + 3000000),
//   timeFrom: "07:00",
//   timeTo: "06:00",
//   phNo: 5345343,
//   parentPhNo: 3435352,
//   reason: "jadk;lfasd aksdjfasd iadjfa ",
// };

// Create New OP Request
app.post("/OpDetails", async (req, res) => {
  try {
    const { data } = req.body;
    const opFormDetails = await opDetailsModel.create({
      name: data.name,
      department: data.department,
      rollno: data.rollno,
      year: data.year,
      dateFrom: data.dateFrom,
      dateTo: data.dateTo,
      timeFrom: data.timeFrom,
      timeTo: data.timeTo,
      phNo: data.phNo,
      parentPhNo: data.parentPhNo,
      reason: data.reason,
      city: data.city,
    });
    console.log(opFormDetails);
    return res.status(200).send({ data: opFormDetails, status: "no err" });
  } catch (err) {
    console.log(err.message);
  }
});

// Get all OPRequest for Warder
app.get("/OpDetails", async (req, res) => {
  try {
    const data = await opDetailsModel.find();
    console.log(data);
    return res.status(200).send({ data: data });
  } catch (err) {
    console.log(err.message);
  }
});

// For Security to get Approval Status
app.post("/OpDetailsById", async (req, res) => {
  try {
    const { rollno } = req.body;
    const data = await opDetailsModel.findOne({ rollno: rollno });
    console.log(data);
    return res.status(200).send({ data: data });
  } catch (err) {
    console.log(err.message);
  }
});

//Accept the OP Request
app.post("/acceptRequset", async (req, res) => {
  try {
    const { rollno } = req.body;
    const data = await opDetailsModel.findOneAndUpdate(
      { rollno: rollno },
      { isAccept: true }
    );
    console.log(data);
    return res.status(200).send({ data: data });
  } catch (err) {
    console.log(err.message);
  }
});

//Remove the OP Request
app.post("/removeRequset", async (req, res) => {
  try {
    const { rollno } = req.body;
    const data = await opDetailsModel.findOneAndUpdate(
      { rollno: rollno },
      { isWait: false }
    );
    console.log(data);
    return res.status(200).send({ data: data });
  } catch (err) {
    console.log(err.message);
  }
});

//Reject the OP Request
app.post("/rejectRequset", async (req, res) => {
  try {
    const { rollno, val } = req.body;
    const data = await opDetailsModel.findOneAndUpdate(
      { rollno: rollno },
      { rejectReason: val }
    );
    console.log(data);
    return res.status(200).send({ data: data });
  } catch (err) {
    console.log(err.message);
  }
});

//Delete All request
app.delete("/deleteAll", async (req, res) => {
  try {
    const data = await opDetailsModel.deleteMany({ name: { $exists: true } });
    console.log(data);
    return res.status(200).send({ data: data });
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(port, () => {
  console.log(`Server runs on port ${port}`);
});
