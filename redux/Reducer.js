import { Add_To_Cart, Remove_From_Cart } from "./Constant";

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_To_Cart:
      return [...state, action.data];

    case Remove_From_Cart:
      return state.filter((ele) => ele.name !== action.data);

    default:
      return state;
  }
};
