import { combineReducers } from "redux";
//import reducers
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;
