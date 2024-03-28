const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");
const port = 8000;

// app.use(express.static('static',options));

//EXPRESS SPECIFIC STUFF
app.use("/static", express.static("static"));
app.use(express.urlencoded());

//PUG SPECIFIC STUFF
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//ENDPOINTS
app.get("/", (req, res) => {
  res.status(200).render("index.pug");
});
app.get("/contact", (req, res) => {
  res.status(200).render("contact.pug");
});

//START THE SERVER
app.listen(port, () => {
  console.log(`The application started successfully on ${port}`);
});
