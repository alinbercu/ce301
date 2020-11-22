import { UPDATE_BALANCE_SUCCESS } from "../actions/types";

const initialState = {
  email: null,
  user_balance: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_BALANCE_SUCCESS:
      return {
        ...state,
        email: action.payload.email,
        user_balance: action.payload.user_balance,
      };
    default:
      return state;
  }
}
