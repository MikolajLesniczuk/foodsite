const express = require("express");
const {
  getUsers,
  register,
  login,
  verifyHandler,
  logout,
} = require("./user.controler");
const { authMiddleware } = require("./authorization/authorization");
const router = express.Router();

router.get("/users", getUsers);
router.post("/signup", register);
router.post("/login", login);
router.post("/logout", authMiddleware, logout);

router.get("/verify/:verificationToken", verifyHandler);
module.exports = router;
