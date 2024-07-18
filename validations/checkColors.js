// check name
const checkName = (req, res, next) => {
    if (req.body.name) {
        return next()
    } else {
        res.status(400).json({error: "Name is required"}) // error 400 is bad request
    }
};

// check boolean
const checkBoolean = (req, res, next) => {
    if (typeof req.body.is_favorite === "boolean" || req.body.is_favorite === "true" || req.body.is_favorite === "false" || req.body.is_favorite === undefined) {
        return next()
    } else {
        res.status(400).json({error: "is_favorite must be a boolean value"})
    }
}

module.exports = { checkName, checkBoolean };