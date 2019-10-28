import {combineReducers} from "redux";
import applicationReducer from "./applicationReducer";

const appReducer = combineReducers({appStore: applicationReducer});

export default appReducer;