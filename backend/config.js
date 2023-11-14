const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  serverPort: 3010,
  mongoConnectionString: process.env.MONGO,
};
