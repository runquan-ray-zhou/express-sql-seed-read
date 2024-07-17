const db = require("../db/dbConfig.js");

const getAllColors = async () => {
    try {
        const allColors = await db.any("SELECT * FROM colors");
        console.log (allColors);
        return allColors;
    } catch (error) {
        return error;
    }
};

module.exports = { getAllColors };