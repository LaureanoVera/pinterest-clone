const mongoose = require("mongoose");
const USER = "admin";
const PASS = "MOpGwQ9bBt2fByep";
const NAME = "pinterest_db";

mongoose
  .connect(
    `mongodb+srv://${USER}:${PASS}@clusterp-c.mu2bw.mongodb.net/${NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err));
