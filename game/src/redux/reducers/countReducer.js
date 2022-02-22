import { PUT_POINT } from '../actionTypes/isAuthorized';

const initialState = { count: 0 };

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_POINT:
      return { ...state, count: action.payload };
    default:
      return state;
  }
};
