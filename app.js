// App Logic

// Dependencies
const cors = require("cors"); // import cors package to make request from other websites
const express = require("express"); // import express package to make server app

// Controllers
const colorsController = require("./controllers/colorsController.js")  // connect the controller routes to the main app

// Configuration
const app = express(); // 

// Middleware used by the entire app.
app.use(cors()); // 
app.use(express.json()); // to be able to parse incoming json body request

// Routes
app.get("/", (req, res) => { // app.get creates a route by listening to "/" and the get request, fetch request defaults to get method
    res.send("Welcome to Colors App");
})

app.use("/colors", colorsController); // connects the controller to the main app. prefixing all the routes in the colors controller.  When a route beginning with /colors will be rerouted to colorsController file / app uses controller

// 404 page
app.get("*", (req, res) => {
    res.status(404).send("Page not found");
})


// Export
module.exports = app;