import { CHECK_SESSION } from '../actionTypes/isAuthorized';

const initialState = { isAuthorized: false, user: [] };

export const checkSessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_SESSION:
      return { ...state, isAuthorized: action.payload.status, user: action.payload.user };
    default:
      return state;
  }
};
