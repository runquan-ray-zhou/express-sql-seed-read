const db = require("../db/dbConfig.js");

const getAllColors = async () => {
    try {
        const allColors = await db.any("SELECT * FROM colors");// return nothing, one thing, many things return is in array
        console.log (allColors);
        return allColors;
    } catch (error) {
        return error;
    }
};

const getColor = async (id) => {
    try {
        const oneColor = await db.one("SELECT * FROM colors WHERE id=$1", id); // sanitizing the variable to prevent SQL injection hacks return is singular object
        return oneColor;
    } catch (error) {
        return error
    }
};

const createColor = async (color) => {
    try {
        const newColor = await db.one(
            "INSERT INTO colors (name, is_favorite) VALUES ($1, $2) RETURNING *", // return all the columns for the new color
            [color.name, color.is_favorite]
        )
        return newColor;
    } catch (error) {
        return error;
    }
}

module.exports = { getAllColors, getColor, createColor };