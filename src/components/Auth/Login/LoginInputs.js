import React from "react";
import { CustomInput } from "../CustomInput";
import { Box } from "@mui/material";

const LoginInputs = ({
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
}) => {
    return (
        <Box
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
            }}
        >
            <CustomInput
                value={email}
                setValue={setEmail}
                placeholder="Email"
                type="text"
                handleSubmit={handleSubmit}
            />
            <CustomInput
                value={password}
                setValue={setPassword}
                placeholder="Password"
                type="password"
                handleSubmit={handleSubmit}
            />
        </Box>
    );
};

export default LoginInputs;
