const { User } = require("./user.model");
const { v4: uuid } = require("uuid");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");
const { sendVerificationToken } = require("./user-mailer.service");

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json({ users });
  } catch (e) {
    next(e);
  }
};
const createUser = async (userData) => {
  try {
    return await User.create({
      ...userData,
      verified: false,
      verificationToken: uuid(),
    });
  } catch (e) {
    console.error(e);
  }
};

const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "Email in use" });
    }
    const avatar = gravatar.url(email, { default: "identicon" }, true);

    const newUser = await createUser({
      email,
      password,
      avatarURL: avatar,
    });
    await sendVerificationToken(newUser.email, newUser.verificationToken);

    await newUser.setPassword(password);
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    newUser.token = token;

    await newUser.save();

    res.status(201).json({
      user: {
        token: token,
        email: newUser.email,
        subscription: newUser.subscription,
        avatar: avatar,
      },
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))) {
      return res
        .status(401)
        .json({ message: "Email or passwcdcczzord is wrong" });
    }
    if (!user.verified) {
      return res.status(404).send({ message: "User is not verified." });
    } else {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      user.token = token;
      await user.save();

      res.status(200).send({
        user: {
          token,
          email: user.email,
          subscription: user.subscription,
        },
      });
    }
  } catch (error) {
    console.error(error);
  }
};
const getUser = async (filter) => {
  try {
    return await User.findOne(filter);
  } catch (e) {
    console.error(e);
  }
};
const updateUser = async (email, userData) => {
  try {
    return await User.findOneAndUpdate({ email }, userData);
  } catch (e) {
    console.error(e);
    throw new error("some problems");
  }
};

const verifyHandler = async (req, res, next) => {
  try {
    const { verificationToken } = req.params;
    const user = await getUser({ verificationToken });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    if (user.verify) {
      return res.status(404).send({ message: "User is already verified. " });
    }

    await updateUser(user.email, {
      verified: true,
      verificationToken: null,
    });

    return res.status(200).send({ message: "Verification successful" });
  } catch (e) {
    return next(e);
  }
};

const logout = async (req, res, next) => {
  try {
    console.log("User before logout:", req.user);
    if (req.user) {
      req.user.token = null;
      console.log("Token after logout:", req.user.token);
      await req.user.save();
      res.status(204).send();
    } else {
      res.status(401).send({ message: "User not authenticated" });
    }
  } catch (error) {
    next(error, req.user);
  }
};

module.exports = {
  getUsers,
  register,
  login,
  verifyHandler,
  logout,
};
