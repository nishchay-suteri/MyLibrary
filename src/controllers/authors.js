const Author = require("../models/Author");

const authorIndexController = async (req, res) => {
    let filterAuthors = {};
    if (req.query.name != null && req.query.name !== "") {
        filterAuthors.name = new RegExp(req.query.name, "i");
    }
    try {
        const authors = await Author.find(filterAuthors);
        res.render(`authors/index`, {
            authors: authors,
            searchOptions: req.query,
        });
    } catch (err) {
        res.redirect("/");
    }
};

const authorNewGetndexController = (req, res) => {
    res.render(`authors/new`, { author: new Author() });
};

const authorNewPostIndexController = async (req, res) => {
    const author = new Author({
        name: req.body.name,
    });
    try {
        const createdAuthor = await author.save();
        res.redirect("/authors");
    } catch (err) {
        res.render(`authors/new`, {
            author: author,
            errorMessage: "Error Creating user",
        });
    }
};

module.exports = {
    authorIndexController,
    authorNewGetndexController,
    authorNewPostIndexController,
};
