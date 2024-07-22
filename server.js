// Dependencies
// run file with node server.js
const app = require("./app") // importing the app from the app file / express app and web server / server uses app

// Configuration
require("dotenv").config(); // import dotenv package and configure it so we can use process.env on the PORT you assigned in .env
const PORT = process.env.PORT;

// Listen
app.listen(PORT, () => { // instructs the Express application to listen for HTTP requests on PORT defined in the .env file. The server will handle incoming requests according to the routes and middleware defined in the application
    console.log(`Listening on port ${PORT}`);
})