const { updatedItemArr, updatedArr } = require("./dataTest");

// returns all the items
const handleAllItems = (req, res) => {
  if (updatedItemArr.length === 0) {
    res.status(404).json({
      status: 404,
      message: "No data found",
    });
  } else {
    res.status(200).json({
      status: 200,
      data: updatedItemArr,
    });
  }
};
// returns data about a single item by id
const handleItemById = (req, res) => {
  const { id } = req.params;
  const searchedItem = updatedItemArr.find((item) => item.id === Number(id));
  if (!searchedItem) {
    res.status(404).json({
      status: 404,
      message: "Item not found",
    });
  } else {
    res.status(200).json({
      status: 200,
      data: { searchedItem },
    });
  }
};

const CartaddItem = (req, res) => {
  console.log(req.body);
  const { id } = req.params;
  const searchedItem = updatedItemArr.find((item) => item.id === Number(id));
  if (!searchedItem) {
    res.status(404).json({
      status: 404,
      message: "Item not found",
    });
  } else {
    res.status(200).json({
      status: 200,
      data: { searchedItem },
    });
  }
};

const CartDeleteItem = (req, res) => {
  console.log(req.body);
  const { id } = req.params;
  const searchedItem = updatedItemArr.find((item) => item.id === Number(id));
  if (!searchedItem) {
    res.status(404).json({
      status: 404,
      message: "Item not found",
    });
  } else {
    res.status(200).json({
      status: 202,
      data: "Item has been removed from you Cart",
    });
  }
};

// returns the sellers
const handleCompanies = (req, res) => {
  res.status(200).json({
    status: 200,
    data: updatedArr,
  });
};

module.exports = {
  handleAllItems,
  handleItemById,
  handleCompanies,
  CartaddItem,
  CartDeleteItem,
};
