const { model } = require("../../../11_BasicBlog/src/models/User");

const indexController = (req, res) => {
  res.send("Hello World!");
};
module.exports = indexController;
