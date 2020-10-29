const User = require("../models").user;
const e = require("express");
const { toData } = require("./jwt");

async function auth(req, res, next) {
  // 1. check for authorization header and "split" it.
  const auth = req.headers.authorization && req.headers.authorization.split(" ");
  // 2. if authorization header is there, auth type is Bearer and we have something at auth[1] we proceed to check the token.
  if (auth && auth[0] === "Bearer" && auth[1]) {
    try {
      // 3. Use the value returned from "toData()" to look for that user in your database with User.findByPk
      const data = toData(auth[1]);
      const user = await User.findByPk(data.userId);
      // 4. If not found, set status to 404 "no user found";
      if (!user) {
        return res.status(404).send("No user found");
      }
      // 5. If user is found, set it to `req.user = user` and call next()
      req.user = user;
      next();
    } catch (e) {
      res.status(400).send(`Invalid JWT Token auth0: ${auth[0]} auth1: ${auth[1]}`);
    }
  } else {
    res.status(401).send({ message: "Please supply valid credentials" });
  }
}

module.exports = auth;
