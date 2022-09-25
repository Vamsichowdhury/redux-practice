import { ActionTypes } from "../constants/action-types";
const initialState = {
  products: [
    {
      id: 1,
      title: "my first product",
      category: "my first category"
    }
  ]
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
