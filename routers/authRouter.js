const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");

const router = new Router();

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).send("Please provide a valid email and password");
    }
    res.send({
      jwt: toJWT({ userId: 1 }),
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
