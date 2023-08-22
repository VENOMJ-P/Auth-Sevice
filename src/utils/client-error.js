const { StatusCodes } = require("http-status-codes");

const AppError = require("./error-handler");

class ClientError extends AppError {
  constructor(name, message, explanation, statuscode) {
    super(name, message, explanation, statuscode);
  }
}

module.exports = ClientError;
