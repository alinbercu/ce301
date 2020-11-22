import { combineReducers } from "redux";
import itemReducer from "./itemReducer.js";
import errorReducer from "./errorReducer.js";
import authReducer from "./authReducer.js";
import userReducer from "./userReducer.js";

export default combineReducers({
  item: itemReducer,
  error: errorReducer,
  auth: authReducer,
  userupdate: userReducer,
});
