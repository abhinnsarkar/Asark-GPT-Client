import { apiClient } from "../../api";

const setAuthToken = () => {
    // const token = JSON.parse(localStorage.getItem("token"));
    const token = localStorage.getItem("token");
    apiClient.defaults.headers["x-auth-token"] = token;
    apiClient.defaults["x-auth-token"] = token;
};

export default setAuthToken;
