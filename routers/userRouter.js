const express = require("express");
const { Router } = express;
const User = require("../models").user;

router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    if (!allUsers) {
      return res.status(404).send("Users not found");
    }

    res.send(allUsers);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  const { fullName, password, email } = req.body;

  try {
    if (!fullName || !password || !email) {
      return res
        .status(400)
        .send(
          "Server did not receive all necessary information, please provide a fullname, password and email address."
        );
    }
    // const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await User.create({ fullName, password, email });
    res.json(newUser);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
