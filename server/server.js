// const express = require("express");
// const morgan = require("morgan");
// const bodyParser = require("body-parser");
// const { updateCart, addItem, deleteCartItem } = require("./handlers");
// express()
//   .use(morgan("tiny"))
//   .use(bodyParser.json())
//   .use(express.static("public"))
//   .put("/cart/item/:id", updateCart)
//   .post("/cart/addItem/:id", addItem)
//   .delete("/cart/item/:id", deleteCartItem)
//   .get("*", (req, res) => {
//     res.status(404).json({
//       status: 404,
//       message: "This is obviously not what you are looking for.",
//     });
//   })
//   .listen(8000, () => console.log(`Listening on port 8000`));
