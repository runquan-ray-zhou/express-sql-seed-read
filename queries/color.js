const db = require("../db/dbConfig.js"); // pg promise maps the rows and columns into objects 

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

const deleteColor = async (id) => { // WHERE filters rows, SELECT 
    try {
        const deletedColor = await db.one("DELETE FROM colors WHERE id = $1 RETURNING *", id);
        return deletedColor
    } catch (error) {
        return error
    }
}

const updateColor = async (id, color) => {
    try {
        const updateColor = await db.one(
            "UPDATE colors SET name=$1, is_favorite=$2 WHERE id=$3 RETURNING *",
            [color.name, color.is_favorite, id]
        );
        return updateColor;
    } catch (error) {
        throw error;
    }
}

module.exports = { getAllColors, getColor, createColor, deleteColor, updateColor };