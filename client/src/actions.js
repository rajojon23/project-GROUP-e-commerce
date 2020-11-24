export const addItem = (item) => ({
  type: "ADD_ITEM",
  item,
});

export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  item,
});

// creating some actions in order to filter the data based on our choice

export const filterByPrice = (payload) => ({
  type: "FILTER_BY_PRICE",
  payload,
});

export const filterByCategory = (payload) => ({
  type: "FILTER_BY_CATEGORY",
  payload,
});

export const filterByBrand = (payload) => ({
  type: "FILTER_BY_BRAND",
  payload,
});
