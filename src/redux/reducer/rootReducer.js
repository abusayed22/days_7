import allReducers from "./allReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    crud:allReducers
})
export default rootReducer;