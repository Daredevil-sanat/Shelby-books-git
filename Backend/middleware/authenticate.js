const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const tokenVerify = jwt.verify(
      token,
      "Mynameisshubhampandeyandiamkingofnorthjustlikejohnsnowfromgameofthrones"
    );
    const rootUser = await User.findOne({
      _id: tokenVerify._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("User not found");
    }
    req.rootUser = rootUser;
    console.log("User exists");
    next();
  } catch (e) {
    console.log(e);
  }
};

module.exports = { Authenticate };
