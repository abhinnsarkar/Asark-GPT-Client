import { logout } from "../../shared/utils/logout";
import { authActions } from "../actions/authActions";
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    ACCOUNT_DELETED,
} from "../actions/types";

const initState = {
    user: localStorage.getItem("user"),
    // token: JSON.parse(localStorage.getItem("token")),
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    loading: false,
};
// const initState = {
//     user: null,
//     token: null,
//     isAuthenticated: null,
// };

const authReducer = (state = initState, action) => {
    switch (action.type) {
        // case authActions.SET_USER:
        //     console.log("action : ", action);
        //     return {
        //         ...state,
        //         user: action.payload.user,
        //         token: action.payload.token,
        //     };

        case authActions.SET_USER:
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            console.log("login/register payload ", action.payload);
            const token = action.payload.token;
            // const token = JSON.stringify(action.payload.token);
            // const user = action.payload.user;
            const user = JSON.stringify(action.payload.user);
            console.log("type of ", typeof action.payload);
            console.log("payload token ", token);
            console.log("payload user ", user);
            localStorage.setItem("token", token);
            localStorage.setItem("user", user);

            console.log("state = ", state);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false,
                user: user,
                token: token,
            };

        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case ACCOUNT_DELETED:
        case LOGOUT:
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            logout();
            return {
                initState,
            };
        default:
            return state;
    }
};

export default authReducer;
