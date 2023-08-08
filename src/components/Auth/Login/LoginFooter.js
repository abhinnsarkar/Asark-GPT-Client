import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const LoginFooter = ({ isPortrait, handleSubmit }) => {
    return (
        <>
            <Box
                className="login-submit-box"
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
                    className="login-submit-center-box-1"
                    sx={{
                        width: "100%",
                        // bgcolor: "orange",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        className="submit-title-center-box-2"
                        sx={{
                            // bgcolor: "purple",
                            width: "75%",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Button
                            sx={{
                                bgcolor: "#32c4a7",
                                width: isPortrait ? "90%" : "35%",
                                height: "75%",
                                color: "white",
                                borderRadius: "10px",
                                "&:hover": {
                                    bgcolor: "#228572",
                                },
                                justifyContent: "center",
                            }}
                            onClick={handleSubmit}
                        >
                            <Typography textTransform="none">Login</Typography>{" "}
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box
                className="login-title-box"
                sx={{
                    width: "100vw",
                    // height: "12vh",
                    height: isPortrait ? "12vh" : "15vh",
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
                        <Link to="/register">
                            Don't have an account? Make one!
                        </Link>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default LoginFooter;
