const jwt = require("jsonwebtoken");
const { usermodel } = require("../db");

exports.studentlog = async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  try {
    const data = await usermodel.find({ email: email, password: password });

    if (data.length > 0) {
      const token = jwt.sign(
        { role: "student", email: email, password: password },
        "1234",
        {
          expiresIn: "9d",
        }
      );
      const option = {
        expires: new Date(Date.now() + 90 * 60 * 60 * 24 * 1000),
      };
      res.cookie("siva", token, option);
      res.send("Exist");
    } else {
      res.send("notExist");
    }
  } catch (e) {
    console.log(e);
    res.status(400).send(e.message);
  }
};

exports.wardenlog = async (req, res) => {
  const { email, password } = req.body;

  try {
    const data = await usermodel.find({ email: email, password: password });
    // console.log(data.length);
    if (data.length > 0) {
      const token = jwt.sign(
        { role: "warden", email: email, password: password },
        "1234",
        {
          expiresIn: "9d",
        }
      );
      const option = {
        expires: new Date(Date.now() + 90 * 60 * 60 * 24 * 1000),
      };
      res.cookie("siva", token, option);
      res.send("Exist");
    } else {
      res.send("notExist");
    }
  } catch (e) {
    console.log(e);
    res.status(400).send(e.message);
  }
};

exports.clerklog = async (req, res) => {
  const { email, password } = req.body;

  try {
    const data = await usermodel.find({ email: email, password: password });
    // console.log(data.length);
    if (data.length > 0) {
      const token = jwt.sign(
        { role: "student", email: email, password: password },
        1234,
        {
          expiresIn: "9d",
        }
      );
      const option = {
        expires: new Date(Date.now() + 90 * 60 * 60 * 24 * 1000),
      };
      res.cookie("siva", token, option);
      res.send("Exist");
    } else {
      res.send("notExist");
    }
  } catch (e) {
    console.log(e);
    res.status(400).send(e.message);
  }
};

exports.sercuritylog = async (req, res) => {
  const { email, password } = req.body;

  try {
    const data = await usermodel.find({ email: email, password: password });
    // console.log(data.length);
    if (data.length > 0) {
      const token = jwt.sign(
        { role: "student", email: email, password: password },
        1234,
        {
          expiresIn: "9d",
        }
      );
      const option = {
        expires: new Date(Date.now() + 90 * 60 * 60 * 24 * 1000),
      };
      res.cookie("siva", token, option);
      res.send("Exist");
    } else {
      res.send("notExist");
    }
  } catch (e) {
    console.log(e);
    res.status(400).send(e.message);
  }
};

exports.cookdata = async (req, res) => {
  try {
    const decode = jwt.verify(req.cookies.siva, "1234");
    if (decode) {
      res.send(decode.role);
    } else {
      res.send("notexist");
    }
  } catch (e) {
    res.send("notexist");
  }
};

exports.logout = (req, res) => {
  res.clearCookie("siva");
  res.send("removed");
};
