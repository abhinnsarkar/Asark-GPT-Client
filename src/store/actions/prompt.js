import axios from "axios";
import { setAlert } from "./alert";
import { PROMPT_SUCCESS, PROMPT_FAIL } from "./types";

const apiClient = axios.create({
    baseURL: "https://asark-gpt-backend.onrender.com/api",
    timeout: 1000,
});

export const prompt =
    ({ message }) =>
    async (dispatch) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const body = JSON.stringify({ message });

        try {
            const res = await apiClient.post(`/prompt`, body, config);
            dispatch({
                type: PROMPT_SUCCESS,
                payload: res.data,
            });
        } catch (err) {
            const errors = err.response.data.errors;
            if (errors) {
                errors.forEach((error) => {
                    dispatch(setAlert(error.msg, "error"));
                    console.log(error.msg);
                });
            }
            dispatch({
                type: PROMPT_FAIL,
            });
        }
    };
