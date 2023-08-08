import { Box, Button, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import React from "react";

const LoginHeader = ({ isLaptop, isPortrait, navigate }) => {
    return (
        <>
            <Box
                className="login-header-box"
                sx={{
                    width: "100vw",
                    height: "10vh",
                    // bgcolor: "red",
                    display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center",
                }}
            >
                <Box
                    className="login-header-center-box-1"
                    sx={{
                        width: "100%",
                        // bgcolor: "orange",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        className="header-title-center-box-2"
                        sx={{
                            // bgcolor: "purple",
                            width: "75%",
                        }}
                    >
                        <Button
                            className="login-header-button"
                            sx={{
                                bgcolor: "#32c4a7",
                                width: isPortrait ? "90%" : "35%",
                                height: "75%",
                                color: "white",
                                borderRadius: "10px",
                                "&:hover": {
                                    bgcolor: "#228572",
                                },
                                justifyContent: "flex-start",
                            }}
                            onClick={() => {
                                navigate("/welcome");
                            }}
                        >
                            <ArrowBackIosNewIcon />{" "}
                            <Typography textTransform="none">
                                Back to Welcome
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box
                className="login-title-box"
                sx={{
                    width: "100vw",

                    height: isPortrait ? "8vh" : "15vh",
                    // bgcolor: "blue",
                    display: "flex",
                    // alignItems: "center",
                }}
            >
                <Box
                    className="login-title-center-box-1"
                    sx={{
                        width: "100%",
                        // bgcolor: "orange",
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: 0,
                    }}
                >
                    <Box
                        className="login-title-center-box-2"
                        sx={{
                            // bgcolor: "purple",
                            width: "75%",
                        }}
                    >
                        <Typography
                            variant={isPortrait || !isLaptop ? "h3" : "h1"}
                            fontWeight="bold"
                            sx={{ color: "#32c4a7" }}
                        >
                            Login
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default LoginHeader;
