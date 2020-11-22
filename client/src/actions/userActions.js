import axios from "axios";
import { returnErrors } from "./errorActions";
import { UPDATE_BALANCE_SUCCESS } from "./types";

//update balance
export const updateBalance = ({ email, user_balance }) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request body
  const body = JSON.stringify({ email, user_balance });

  axios
    .post("/api/users/updatebalance", body, config)
    .then((res) =>
      dispatch({
        type: UPDATE_BALANCE_SUCCESS,
        payload: { email, user_balance },
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
