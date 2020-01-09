import { combineReducers } from "redux";
//import reducers
import userReducer from "./userReducer";

/**
 * Root reducer - combine all reducers
 */
const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;
