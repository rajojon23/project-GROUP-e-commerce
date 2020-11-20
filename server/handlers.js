const { updatedItemArr } = require("./data");

const updateCart = (req, res) => res.status(200).json(updatedItemArr);

module.exports = { updateCart };
