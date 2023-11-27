const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  serverPort: 3010,
  mongoConnectionString: process.env.MONGO,
  gmailUser: process.env.GMAIL_USER,
  gmailPass: process.env.GMAIL_PASS,
};
