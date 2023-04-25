import { createStore } from "redux";
import CalendarReducer from "../reducers/reducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(CalendarReducer, composeWithDevTools());

export default store;
