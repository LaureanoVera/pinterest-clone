const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const multer = require("multer");

// SETTINGS
const port = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// STATIC
app.use(express.static(path.join(__dirname, "public")));

// MIDDLEWARES
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(
  multer({
    dest: path.join(__dirname, "public", "images", "upload"),
  }).single("image")
);

// GLOBAL

// ROUTES
app.use(require('./routes/index'))

// SERVER
app.listen(port, () => {
  console.log(`Server listened on port ${port}`);
});
