// App Logic

// Dependencies
const cors = require("cors");
const express = require("express");

// Controllers
const colorsController = require("./controllers/colorsController.js")

// Configuration
const app = express();


// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to Colors App");
})

app.use("/colors", colorsController);

// 404 page
app.get("*", (req, res) => {
    res.status(404).send("Page not found");
})


// Export
module.exports = app;