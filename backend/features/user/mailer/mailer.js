const nodemailer = require("nodemailer");
const { gmailPass, gmailUser } = require("../../../config");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailUser,
    pass: gmailPass,
  },
});

const sendMail = async (options) => {
  try {
    await transporter.sendMail(options);
  } catch (e) {
    console.error(e);
    throw new error("Mail sending failed");
  }
};

module.exports = {
  sendMail,
};
