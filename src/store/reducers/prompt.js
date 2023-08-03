import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    // LOGIN_SUCCESS,
    // LOGIN_FAIL,
    USER_LOADED,
    PROMPT_FAIL,
    PROMPT_SUCCESS,
    // AUTH_ERROR,
    // LOGOUT,
    // ACCOUNT_DELETED,
} from "../actions/types";

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload,
            };

        case PROMPT_SUCCESS:
            // case LOGIN_SUCCESS:
            // console.log("register payload ", payload);
            // console.log("payload token ", payload.token);
            // localStorage.setItem("token", payload.token);
            console.log("payload", payload);
            console.log("state", state);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false,
            };

        case PROMPT_FAIL:
            // case LOGIN_FAIL:
            // case AUTH_ERROR:
            // case ACCOUNT_DELETED:
            // case LOGOUT:
            // localStorage.removeItem("token");
            // return {
            //   ...state,
            //   token: null,
            //   isAuthenticated: false,
            //   loading: false,
            // };
            return {
                initialState,
            };

        default:
            return state;
    }
}
