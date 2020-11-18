const express = require("express");

const {
    authorIndexController,
    authorNewGetndexController,
    authorNewPostIndexController,
} = require("../controllers/authors");

const router = express.Router();

// All Authors Route
router.get("/", authorIndexController);

// New Author Route
router.get("/new", authorNewGetndexController);

// Create author Route
router.post("/", authorNewPostIndexController);

module.exports = router;
