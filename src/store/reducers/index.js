import { combineReducers } from "redux";
import locationsReducers from "./locations.reducers";

export default combineReducers({
  Locations: locationsReducers,
});
