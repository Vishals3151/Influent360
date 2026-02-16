require("dotenv").config();
const jwt = require("jsonwebtoken");
const { TOKEN_KEY } = process.env;
if (!TOKEN_KEY) {
  throw new Error("TOKEN_KEY environment variable is not set");
}

module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};
