import { ActionTYpes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTYpes.SET_PRODUCTS,
    payload: products
  };
};
export const selectedProduct = (product) => {
  return {
    type: ActionTYpes.SELECTED_PRODUCT,
    payload: product
  };
};
