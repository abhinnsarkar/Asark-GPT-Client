import React from "react";
import { CustomInput } from "../CustomInput";
import { Box } from "@mui/material";

const LoginInputs = ({ email, setEmail, password, setPassword }) => {
    return (
        <Box
            sx={{
                // bgcolor: "red",
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
            />
            <CustomInput
                value={password}
                setValue={setPassword}
                placeholder="Password"
                type="password"
            />
        </Box>
    );
};

export default LoginInputs;
