const { Router } = require("express");
const router = Router();
const path = require("path");

const Image = require("../models/Image");

router.get("/", (req, res) => {
  res.send("Index Page");
});

router.get("/upload", (req, res) => {
  res.render("upload");
});

router.post("/upload", async (req, res) => {
  const image = new Image();
  image.title = req.body.title;
  image.description = req.body.description;
  image.filename = req.file.filename;
  image.path = "/images/upload/" + req.file.filename;
  image.originalname = req.file.originalname;
  image.mimetype = req.file.mimetype;
  image.size = req.file.size;

  await image.save();

  res.redirect('/')
});

router.get("/image/:id", (req, res) => {
  res.send("Profile");
});

router.get("/image/:id/delete", (req, res) => {
  res.send("Image Delete");
});

module.exports = router;
