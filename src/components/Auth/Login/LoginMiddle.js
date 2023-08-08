import React from "react";
import LoginInputs from "./LoginInputs";
import { Box } from "@mui/material";

const LoginMiddle = ({
    isPortrait,
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
}) => {
    return (
        <>
            <Box
                className="login-input-box"
                sx={{
                    width: "100vw",
                    // height: "20vh",
                    height: isPortrait ? "50vh" : "30vh",
                    // bgcolor: "pink",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Box
                    className="login-input-center-box-1"
                    sx={{
                        width: "100%",
                        height: "100%",
                        // bgcolor: "orange",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        className="login-input-center-box-2"
                        sx={{
                            // bgcolor: "purple",
                            width: "75%",
                        }}
                    >
                        <LoginInputs
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            handleSubmit={handleSubmit}
                        />
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default LoginMiddle;
