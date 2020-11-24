"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

// thira
const {
  handleAllItems,
  handleItemById,
  handleCompanies,
  CartaddItem,
  CartDeleteItem,
  handleInventory,
} = require("./handlers");

//const { updateCart } = require("./handlers");
// const { updateCart, addItem, deleteCartItem } = require("./handlers");

const PORT = 4000;

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // REST endpoints?
  .get("/bacon", (req, res) => res.status(200).json("🥓"))

  // thira's get endpoint
  .get("/allitems", handleAllItems)
  .get("/item/:id", handleItemById)
  .get("/companies", handleCompanies)
  .put("/inventory/update", handleInventory)
  .post("/cart/item/:id", CartaddItem)
  .delete("/cart/item/:id", CartDeleteItem)

  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
