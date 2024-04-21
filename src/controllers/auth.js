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
    res.status(201).json({ customer });
  } catch (error) {
    errorHandler(error, res);
  }
};
exports.getAllUsers = async (req, res) => {
  try {
    const users = await Auth.getAllUsers();
    res.status(200).json({ users });
  } catch (error) {
    errorHandler(error, res);
  }
};
