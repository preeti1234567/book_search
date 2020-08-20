const router = require("express").Router();
const postRoutes = require("./posts");

//Post routes
router.use("/books", postRoutes);

module.exports =router;