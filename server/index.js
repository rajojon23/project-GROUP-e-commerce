"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

// thira
const {
  handleAllItems,
  handleItemById,
  handleCompanies,
} = require("./handlers");

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

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
