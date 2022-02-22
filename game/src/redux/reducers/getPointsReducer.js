import { GET_POINT } from '../actionTypes/isAuthorized';

const initialState = { points: [] };

export const getPointsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POINT:
      return { ...state, points: action.payload };
    default:
      return state;
  }
};
