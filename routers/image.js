const { Router } = require("express");
const User = require("../models").user;

router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    if (!allUser) {
      return res.status(404).send("Users not found");
    }

    res.send(allUsers);
  } catch (e) {
    next(e);
  }
});

module.export = router;
