// redux/userReducer.js

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './Constant';

const initialState = {
  loading: false,
  user: null,   
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, user: action.data };

    case FETCH_USERS_FAILURE:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};
