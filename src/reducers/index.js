import { combineReducers } from "redux";
// import auth from "./auth";
import articles from "./articles";
import errors from "./errors";

export default combineReducers({
  articles,
  errors,
});
