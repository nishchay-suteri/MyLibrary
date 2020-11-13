const { model } = require("../../../11_BasicBlog/src/models/User");

const indexController = (req, res) => {
  res.render(`index`);
};
module.exports = indexController;
