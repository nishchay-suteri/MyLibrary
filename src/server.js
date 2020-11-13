const path = require("path");

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();

const GLOBALS = require("./constants/globals");
const indexRouter = require("./routes/index");

app.use(express.static(path.join(__dirname, "../public"))); // To serve static contents

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("layout", "layouts/layout");
app.use(expressLayouts);

app.use(indexRouter);

app.listen(GLOBALS.SERVER_PORT, () =>
    console.log(`Server running ${GLOBALS.SERVER_PORT}`)
);
