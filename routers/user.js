const { Router } = require("express");
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

module.export = router;
