import counterReducer from "./counter";
import LoggedReducer from "./Login";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLoggedIn: LoggedReducer
});

export default allReducers;
