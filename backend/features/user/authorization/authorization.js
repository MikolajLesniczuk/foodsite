const jwt = require("jsonwebtoken");
const { User } = require(".././user.model");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Not authorizedaaaa" });
  }

  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOne({ _id: userId, token });

    if (!user) {
      return res.status(401).json({ message: "Not authorizedbbbb" });
    }

    req.user = user;
    req.token = token;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Not authorizedccc" });
  }
};
// kk
module.exports = { authMiddleware };
