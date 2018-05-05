import {combineReducers} from "redux";
import auth from "./auth"
import purchase from "./purchase"

export default combineReducers({
  auth,
  purchase
});