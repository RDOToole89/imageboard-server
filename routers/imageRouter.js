const express = require("express");
const { Router } = express;
const Image = require("../models").image;

router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const allImages = await Image.findAll();
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

module.exports = router;
