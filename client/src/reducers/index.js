import React from "react";

const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: 1,
        },
      };
    }
    case "REMOVE_ITEM": {
      const stateCopy = { ...state }; // New object we CAN mutate
      delete stateCopy[action.item.id];

      return {
        ...stateCopy,
      };
    }

    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);

export const filterStore = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER_BY_PRICE":
      return state;
    case "FILTER_BY_CATEGORY":
      return state;
    case "FILTER_BY_BRAND":
      return state;
    default:
      return state;
  }
};
