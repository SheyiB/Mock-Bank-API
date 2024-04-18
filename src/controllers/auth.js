const { errorHandler } = require("../utils/error");
const Auth = require("../services/auth.service");

exports.register = async (req, res) => {
  try {
    const customer = await Auth.register(req.body);
    res
      .status(201)
      .json({ message: "Customer created successfully", customer });
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.login = async (req, res) => {
  try {
    const customer = await Auth.login(req.body);
    res.status(201).json({ response });
  } catch (error) {
    // res.status(500).json({ message: error.message });
    errorHandler(error, res);
  }
};
