import crudReducer from "./allReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    crud:crudReducer
})
export default rootReducer;