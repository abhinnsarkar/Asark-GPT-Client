import * as api from "../../api";
import setAuthToken from "../../shared/utils/setAuthToken";
import { logout } from "../../shared/utils/logout";

import { openAlertMessage } from "./alertActions";

export const authActions = {
    SET_USER: "AUTH.SET_USER",
};

export const getActions = (dispatch) => {
    return {
        login: (user, navigate) => dispatch(login(user, navigate)),
        register: (user, navigate) => dispatch(register(user, navigate)),
        deleteAccount: (navigate) => dispatch(deleteAccount(navigate)),
        sendPrompt: (promptValue) => dispatch(sendPrompt(promptValue)),
        getMessages: () => dispatch(getMessages()),
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
            console.log("registered");
            const user = response.data.user;
            const token = response.data.token;
            console.log("user :", user);
            console.log("token :", token);
            localStorage.setItem("token", JSON.stringify(token));
            localStorage.setItem("user", JSON.stringify(user));

            dispatch(setUser({ user, token }));
            setAuthToken();
            console.log("pushing to home from login");

            dispatch(openAlertMessage("Successfully Logged-In", "success"));

            navigate("/home");
        }
    };
};

export const deleteAccount = (navigate) => {
    console.log(`Delete Account action received`);
    return async (dispatch) => {
        console.log(`Delete Account action received`);

        const response = await api.deleteAccount();
        console.log(response);

        if (response.error) {
            dispatch(
                openAlertMessage(response?.exception?.response?.data, "error")
            );
            console.log("error");
            console.log(response);
        } else {
            logout();
            dispatch(
                openAlertMessage("Successfully Deleted Account", "success")
            );
            navigate("/welcome");
        }
    };
};

export const sendPrompt = (promptValue) => {
    return async (dispatch) => {
        const options = {
            method: "POST",
            body: JSON.stringify({
                promptValue,
            }),

            headers: {
                "Content-Type": "application/json",
                "x-auth-token": JSON.parse(localStorage.getItem("token")),
            },
        };

        return await api.sendPrompt(options);
    };
};

export const getMessages = () => {
    console.log("in the api actions for get msg");
    return async (dispatch) => {
        return await api.getMessages();
    };
};
