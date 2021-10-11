const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const viewsRoute = require("./routes/viewsRoute");
const app = express();

dotenv.config({ path: "./config.env" });

app.use(cors());

app.options("*", cors());

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "/public")));

app.use("/", viewsRoute);

app.listen(process.env.PORT, () => {
  console.log(`This app is listening to port ${process.env.PORT}`);
});

module.exports = app;
