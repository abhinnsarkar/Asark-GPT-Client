import * as api from "../../api";
import { logout } from "../../shared/utils/logout";

import { openAlertMessage } from "./alertActions";

export const getActions = (dispatch) => {
    return {
        sendPrompt: (promptValue) => dispatch(sendPrompt(promptValue)),
        getMessages: () => dispatch(getMessages()),
    };
};

export const sendPrompt = (promptValue) => {
    return async (dispatch) => {
        // return async () => {
        const options = {
            method: "POST",
            body: JSON.stringify({
                promptValue,
            }),

            headers: {
                "Content-Type": "application/json",
                // "x-auth-token": JSON.parse(localStorage.getItem("token")),
                "x-auth-token": localStorage.getItem("token"),
            },
        };

        dispatch(openAlertMessage(`Sending prompt ${promptValue}`, "info"));
        return await api.sendPrompt(options);
    };
};

export const getMessages = () => {
    console.log("in the api actions for get msg");
    return async (dispatch) => {
        return await api.getMessages();
    };
};
