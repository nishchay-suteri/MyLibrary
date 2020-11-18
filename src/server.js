const path = require("path");

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();

const GLOBALS = require("./constants/globals");
const indexRouter = require("./routes/index");
const authorRouter = require("./routes/authors");
const mongoose = require("mongoose");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("layout", "layouts/layout");
// Mongoose Warning Resolution
mongoose.set("useUnifiedTopology", true);
mongoose.set("useNewUrlParser", true);
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

app.use(express.static(path.join(__dirname, "../public"))); // To serve static contents
app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/authors", authorRouter);

mongoose.connect(GLOBALS.DB_URI, () => {
    console.log("Connected to DB");
});
const db = mongoose.connection;
db.on("error", (error) => {
    console.error(error);
});

app.listen(GLOBALS.SERVER_PORT, () =>
    console.log(`Server running ${GLOBALS.SERVER_PORT}`)
);
