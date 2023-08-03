// import {
//     REGISTER_SUCCESS,
//     REGISTER_FAIL,
//     LOGIN_SUCCESS,
//     LOGIN_FAIL,
//     USER_LOADED,
//     // AUTH_ERROR,
//     // LOGOUT,
//     // ACCOUNT_DELETED,
// } from "../actions/types";

// const initialState = {
//     token: localStorage.getItem("token"),
//     isAuthenticated: null,
//     loading: true,
//     user: null,
// };

// export default function (state = initialState, action) {
//     const { type, payload } = action;

//     switch (type) {
//         case USER_LOADED:
//             return {
//                 ...state,
//                 isAuthenticated: true,
//                 loading: false,
//                 user: payload,
//             };

//         case REGISTER_SUCCESS:
//         case LOGIN_SUCCESS:
//             console.log("login/register payload ", payload);
//             console.log("type of ", typeof payload);
//             console.log("payload token ", payload.token);
//             localStorage.setItem("token", payload.token);
//             console.log("state = ", state);
//             return {
//                 ...state,
//                 ...payload,
//                 isAuthenticated: true,
//                 loading: false,
//                 user: payload.payload.user.id,
//             };

//         case REGISTER_FAIL:
//         case LOGIN_FAIL:
//             // case AUTH_ERROR:
//             // case ACCOUNT_DELETED:
//             // case LOGOUT:
//             localStorage.removeItem("token");
//             // return {
//             //   ...state,
//             //   token: null,
//             //   isAuthenticated: false,
//             //   loading: false,
//             // };
//             return {
//                 initialState,
//             };

//         default:
//             return state;
//     }
// }

import { authActions } from "../actions/authActions";

const initState = {
    user: JSON.parse(localStorage.getItem("user")),
    token: JSON.parse(localStorage.getItem("token")),
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case authActions.SET_USER:
            console.log("action : ", action);
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
            };
        default:
            return state;
    }
};

export default authReducer;
