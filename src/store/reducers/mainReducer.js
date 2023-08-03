import { combineReducers } from "redux";

import authReducer from "./authReducer";
import accountReducer from "./accountReducer";
import alertReducer from "./alertReducer";

export default combineReducers({
    authReducer,
    accountReducer,
    alertReducer,
});
