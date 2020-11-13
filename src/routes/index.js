const express = require("express");
const router = express();

const indexController = require("../controllers/index");

router.get("/", indexController);

module.exports = router;
