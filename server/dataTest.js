const fs = require("file-system");
const companies = JSON.parse(fs.readFileSync("./data/companies.json"));
const items = JSON.parse(fs.readFileSync("./data/items.json"));
const updatedArr = [];
const updatedItemArr = [];

items.forEach((item) => {
  updatedItemArr.push({
    name: item.name,
    price: item.price,
    bodyLocation: item.body_location,
    category: item.category,
    id: item._id,
    image: item.imageSrc,
    numInStock: item.numInStock,
    companyId: item.companyId,
  });
});
companies.forEach((item) => {
  updatedArr.push({
    name: item.name,
    url: item.url,
    country: item.country,
    _id: item._id,
  });
});

module.exports = {
  updatedItemArr,
  updatedArr,
};
