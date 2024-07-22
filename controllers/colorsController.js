const express = require("express") // define and import the express app from express package
const colors = express.Router() // create an instances of a router / controller / new router object.
const { getAllColors, getColor, createColor, deleteColor, updateColor } = require("../queries/color"); // importing query functions from color.js, they query the database
const { checkName, checkBoolean } = require("../validations/checkColors.js") // importing validation middleware functions from checkColors.js.

// Index Route
colors.get("/", async (req, res) => { // we are creating a route that listens the request with the get method using a async function because we are making async call. t
    const allColors = await getAllColors();
    if (allColors[0]) {
        res.status(200).json(allColors);
    } else {
        res.status(500).json({ error: "server error" });
    }
});

// Show Route
colors.get("/:id", async (req, res) => {
    const { id } = req.params;
    const color = await getColor(id);
    if (color) {
        res.status(200).json(color);
    } else {
        res.status(404)._construct.json({ error: "Not Found" });
    }
})

// Create Route
colors.post("/", checkName, checkBoolean, async (req, res) => {
    const color = await createColor(req.body);
    res.json(color)
})

// Delete Route
colors.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedColor = await deleteColor(id);
    if (deletedColor.id) {
        res.status(200).json(deletedColor);
    } else {
        res.status(404).json("Color not found")
    }
})

// Update Route
colors.put("/:id", checkName, checkBoolean, async (req, res) => {
    const { id } = req.params;
    try {
        const updatedColor = await updateColor(id, req.body);
        res.status(200).json(updatedColor);
    } catch (error) {
        res.status(404).json({ error: `No color with the id ${id} can be found.`})
    }
})

module.exports = colors;