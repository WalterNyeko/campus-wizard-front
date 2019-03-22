import { combineReducers } from "redux";
import usersReducer from "./authReducer";

export default combineReducers({
  users: usersReducer
});
