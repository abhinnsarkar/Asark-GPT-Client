import * as api from "../../api";
import setAuthToken from "../../shared/utils/setAuthToken";

import { openAlertMessage } from "./alertActions";

export const authActions = {
    SET_USER: "AUTH.SET_USER",
};

export const getActions = (dispatch) => {
    return {
        login: (user, navigate) => dispatch(login(user, navigate)),
        register: (user, navigate) => dispatch(register(user, navigate)),
        setUser: ({ user, token }) => dispatch(setUser({ user, token })),
    };
};

const setUser = (payload) => {
    return {
        type: authActions.SET_USER,
        payload,
    };
};

export const register = (user, navigate) => {
    return async (dispatch) => {
        const response = await api.register(user);
        console.log(response);
        if (response.error) {
            dispatch(
                openAlertMessage(response?.exception?.response?.data, "error")
            );
            console.log("error");
            console.log(response);
        } else {
            console.log("registered");
            const user = response.data.user;
            const token = response.data.token;
            console.log("user :", user);
            console.log("token :", token);
            localStorage.setItem("token", JSON.stringify(token));
            localStorage.setItem("user", JSON.stringify(user));

            dispatch(setUser({ user, token }));
            dispatch(
                openAlertMessage("Successfully made an account", "success")
            );
            setAuthToken();
            console.log("pushing to home from register");
            navigate("/home");
        }
    };
};

export const login = (user, navigate) => {
    return async (dispatch) => {
        console.log(`Login User : ${user}`);

        const response = await api.login(user);
        console.log(response);

        if (response.error) {
            dispatch(
                openAlertMessage(response?.exception?.response?.data, "error")
            );
            console.log("error");
            console.log(response);
        } else {
            console.log("logged in");
            const user = response.data.user;
            const token = response.data.token;
            console.log("user :", user);
            console.log("token :", token);
            localStorage.setItem("token", JSON.stringify(token));
            localStorage.setItem("user", JSON.stringify(user));

            dispatch(setUser({ user, token }));
            dispatch(openAlertMessage("Successfully logged in", "success"));

            setAuthToken();
            console.log("pushing to home from login");

            navigate("/home");
        }
    };
};
