import axios from "axios";

export const apiClient = axios.create({
    // baseURL: process.env.SERVER,
    baseURL: "https://asark-gpt-backend.onrender.com",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

export const login = async (data) => {
    console.log("entered api login");
    try {
        console.log("inside api login try");
        console.log(`Giving endpoint data : ${data}`);
        return await apiClient.post("/api/auth/login", data);
    } catch (exception) {
        return {
            error: true,
            exception,
        };
    }
};

export const register = async (data) => {
    console.log("entered api register");
    try {
        console.log("inside api register try");
        console.log(`Giving endpoint data : ${data}`);
        return await apiClient.post("/api/auth/register", data);
    } catch (exception) {
        return {
            error: true,
            exception,
        };
    }
};

export const deleteAccount = async () => {
    console.log("entered api delete account");
    try {
        console.log("inside api delete account try");
        return await apiClient.post("/api/account/delete");
    } catch (exception) {
        return {
            error: true,
            exception,
        };
    }
};

export const sendPrompt = async (options) => {
    console.log("entered api send prompt");
    try {
        const response = await fetch(
            "https://asark-gpt-backend.onrender.com/api/prompts",
            options
        );
        const data = await response.json();

        console.log("api postmprompt  try ", data);
        console.log("ai said in frontend", data["aiResponse"]);
        console.log("exiting");

        return data["aiResponse"];
    } catch (error) {
        console.error(error);
    }
};

export const getMessages = async () => {
    console.log("entered api get messages");
    try {
        console.log("inside api get msg try");
        const responseFromGet = await apiClient.get("/api/prompts");
        var msgs = [];
        for (
            let i = 0;
            i < Object.keys(responseFromGet.data["msgs"]).length;
            i++
        ) {
            msgs.push(
                responseFromGet.data["msgs"][
                    Object.keys(responseFromGet.data["msgs"])[i]
                ]
            );
        }
        return msgs;
    } catch (exception) {
        return {
            error: true,
            exception,
        };
    }
};
