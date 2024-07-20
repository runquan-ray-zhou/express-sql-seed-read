// Dependencies
const app = require("./app") // importing the app from the app file / express app and web server / server uses app

// Configuration
require("dotenv").config(); // import dotenv package and configure it so we can use process.env on the PORT you assigned in .env
const PORT = process.env.PORT;

// Listen
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})