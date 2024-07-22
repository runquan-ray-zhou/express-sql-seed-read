// App Logic
// run file with node server.js
// Dependencies
const cors = require("cors"); // import cors middleware function from cors module, cors allow server to take request from other websites/domain
const express = require("express"); // import express framework/function to make server app.

// Controllers
const colorsController = require("./controllers/colorsController.js")  // connect the controller routes to the main app

// Configuration
const app = express(); // 

// Middleware used by the entire app.
app.use(cors()); // This line sets up CORS middleware to handle cross-origin requests, allowing our server to specify which domains are allowed to access its resources, currently it is allowing all.
app.use(express.json()); // This line sets up built-in Express middleware to parse incoming JSON request bodies, making the JSON data available as a JavaScript object in req.body.

// Routes
// Routing refers to how an application’s endpoints (URIs) respond to client requests.
// In other words, the application “listens” for requests that match the specified route(s) and method(s), and when it detects a match, it calls the specified callback function.
app.get("/", (req, res) => { // app.get creates a route by listening to "/" and the get request, fetch request defaults to get method
    res.send("Welcome to Colors App");
})

app.use("/colors", colorsController); // connects the controller to the main app. prefixing all the routes in the colors controller.  When a route beginning with /colors it will be rerouted to colorsController file / app uses controller

// 404 page
app.get("*", (req, res) => {
    res.status(404).send("Page not found");
})


// Export
module.exports = app;