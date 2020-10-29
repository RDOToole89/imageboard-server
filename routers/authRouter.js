const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");
const bcrypt = require("bcrypt");
const authMiddleware = require("../auth/middleware");
const User = require("../models").user;

const router = new Router();

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).send("Please provide a valid email and password");
    }

    const foundUser = await User.findOne({ where: { email: email } });

    if (!foundUser) {
      return res.status(400).send({ message: "User with provided email does not exist" });
    }

    if (!bcrypt.compareSync(password, foundUser.password)) {
      return res.status(400).send("Password is incorrect, please provide valid password");
    }
    const token = toJWT({ userId: foundUser.id });
    console.log("token", token);

    const checkedToken = toData(token);
    console.log("What is stored in token", checkedToken);

    res.json({ token });
  } catch (e) {
    next(e);
  }
});

router.get("/test-auth", authMiddleware, (req, res, next) => {
  res.send({ message: `Thanks for visiting the super duper secret endpoint ${req.user.email}` });
});

module.exports = router;
