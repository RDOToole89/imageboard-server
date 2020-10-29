const express = require("express");
const { Router } = express;
const Image = require("../models").image;
const { toData } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const router = new Router();

router.get("/", authMiddleware, async (req, res, next) => {
  // limit indicates how many results are on the page
  // offset determines how many results to skip

  const limit = Math.min(req.query.limit || 5, 20);
  const offset = req.query.offset || 0;

  try {
    const allImages = await Image.findAll({ limit, offset });
    if (!allImages) {
      return res.status(404).send("Images not found");
    }

    res.send(allImages);
  } catch (e) {
    next(e);
  }
});

router.get("/:imageId", async (req, res, next) => {
  const imageId = req.params.imageId;

  try {
    const imageById = await Image.findByPk(imageId);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  const { title, url } = req.body;

  try {
    if (!title || !url) {
      return res
        .status(400)
        .send("Server did not receive all necessary information, please provide a title and url.");
    }
    const createImage = await Image.create({ title, url });
    res.json(createImage);
  } catch (e) {
    next(e);
  }
});

// TEST AUTHENTICATION ROUTE
router.get("/auth/messy", async (req, res, next) => {
  const limit = Math.min(req.query.limit || 5, 20);
  const offset = req.query.offset || 0;

  const auth = req.headers.authorization && req.headers.authorization.split(" ");
  if (auth && auth[0] === "Bearer" && auth[1]) {
    try {
      const data = toData(auth[1]);
      console.log(data);
    } catch (e) {
      res.status(400).send(`Invalid JWT Token auth0: ${auth[0]} auth1: ${auth[1]}`);
    }

    try {
      const images = await Image.findAndCountAll({ limit, offset });
      if (!images) {
        return res.status(404).send(`No images found`);
      }
      res.json({ images: images.rows, total: images.count });
    } catch (e) {
      console.log(e);
    }
  } else {
    res.status(401).send({
      message: "Please supply some valid credentials",
    });
  }
});

module.exports = router;
