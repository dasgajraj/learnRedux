import {
  Add_To_Cart,
  Remove_From_Cart,
  Theme,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './Constant'

export function addToCart(item) {
  return {
    type: Add_To_Cart,
    data: item
  }

}
export function removeFromCart(itemName) {
  return {
    type: Remove_From_Cart,
    data: itemName
  }

}

export function setTheme(isDarkMode) {
  return {
    type: Theme,
    data: isDarkMode
  };
};


export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_USERS_REQUEST });

    try {
      const response = await fetch("https://dummyjson.com/users/1");
      const result = await response.json();

      dispatch({
        type: FETCH_USERS_SUCCESS,
        data: result, 
      });
    } catch (error) {
      dispatch({
        type: FETCH_USERS_FAILURE,
        error: error.message,
      });
    }
  };
};