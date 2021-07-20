const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const multer = require("multer");
const { v4 } = require('uuid')
const { format } = require('timeago.js')
const port = process.env.PORT || 3000;

// INITIALIZE
require('./settings/db')

// SETTINGS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// STATIC
app.use(express.static(path.join(__dirname, "public")));

// MIDDLEWARES
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
const storage = multer.diskStorage({
  destination: path.join(__dirname,'public','images','upload'),
  filename: (req, file, cb) => { // cb = callback
    cb(null, v4() + path.extname(file.originalname)) // extension
  }
})
app.use(multer({ storage }).single("image"));

// GLOBAL
app.use((req, res, next) => {
  app.locals.format = format;
  next()
})

// ROUTES
app.use(require('./routes/index'))

// SERVER
app.listen(port, () => {
  console.log(`Server listened on port ${port}`);
});
