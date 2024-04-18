const { customer } = require("../model");
const { AppError } = require("../utils/error");

class AuthService {
  constructor() {
    this.model = customer;
  }

  async register(data) {
    try {
      let customer;

      customer = await this.model.findOne({ where: { email: data.email } });

      if (customer) {
        throw new AppError("User with entered email already exist", 400);
      }

      customer = await this.model.findOne({
        where: { username: data.username },
      });

      if (customer) {
        throw new AppError("User with entered username already exist", 400);
      }

      customer = await this.model.findOne({ where: { bvn: data.bvn } });

      if (customer) {
        throw new AppError("User with entered bvn already exist", 400);
      }

      customer = await this.model.findOne({
        where: { phoneNumber: data.phoneNumber },
      });

      if (customer) {
        throw new AppError("User with entered phone number already exist", 400);
      }

      customer = await this.model.findOne({ where: { nin: data.nin } });

      if (customer) {
        throw new AppError("User with entered nin already exist", 400);
      }

      const length = await this.model.count();

      const accountNumber = 1000000000 + (length + 1);

      data.accountNumber = accountNumber;

      customer = await this.model.create(data);

      return customer;
    } catch (error) {
      throw error;
    }
  }
  async login(data) {
    try {
      const { email, password } = body;
      let user = await this.model.findOne({
        where: { email: data.email, password: data.password },
      });
      if (!user) {
        return "user not found";
      }
      if (!email) {
        return "email not found";
      }
      if (user.password !== password) {
        return "invalid password";
      }
    } catch (error) {
      throw error;
    }
  }
}

const Auth = new AuthService();

module.exports = Auth;
