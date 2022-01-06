import { combineReducers } from "redux";
import appReducer from "./reducer";

const reducers = combineReducers({
  account: appReducer,
});
