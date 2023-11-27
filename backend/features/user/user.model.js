const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const user = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  avatarURL: {
    type: String,
    default: null,
  },
  subscription: {
    type: String,
    enum: ["free", "dietitiansupport", "full"],
    default: "free",
  },
  newslettersubscription: {
    type: Boolean,
    default: false,
  },
  token: {
    type: String,
    default: null,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
  },
  favorites: {
    type: [String],
    default: [],
  },
});

user.methods.setPassword = async function (password) {
  this.password = await bcrypt.hash(password, 10);
};

user.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("users", user);

module.exports = { User };
