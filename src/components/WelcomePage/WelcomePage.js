import { Box, Button, Typography } from "@mui/material";
import "./landing.css";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const WelcomePage = ({ isLaptop, isPortrait }) => {
    const navigate = useNavigate();
    console.log("getting thw welcome page");
    console.log("portrait ? ", isPortrait);

    if (localStorage.token) {
        return <Navigate to="/home" />;
    }

    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large">Chat GPT</h1>
                    <p className="lead">
                        Industry leading AI Assistant owned by OpenAI
                    </p>
                    <div className="buttons">
                        <Box
                            sx={{
                                width: isPortrait ? "100vw" : "25vw",
                                height: "10vh",
                                display: "flex",
                                justifyContent: "space-evenly",
                                alignItems: "center",
                            }}
                        >
                            <Button
                                sx={{
                                    bgcolor: "#32c4a7",
                                    "&:hover": {
                                        bgcolor: "#228572",
                                    },
                                    width: "40%",
                                    height: "4vh",
                                    color: "white",
                                    borderRadius: "10px",
                                }}
                                onClick={() => {
                                    navigate("/register");
                                }}
                            >
                                <Typography textTransform="none">
                                    Sign Up
                                </Typography>
                            </Button>
                            <Button
                                sx={{
                                    bgcolor: "#32c4a7",
                                    "&:hover": {
                                        bgcolor: "#228572",
                                    },
                                    width: "40%",
                                    height: "4vh",
                                    color: "white",
                                    borderRadius: "10px",
                                }}
                                onClick={() => {
                                    navigate("/login");
                                }}
                            >
                                <Typography textTransform="none">
                                    Log In
                                </Typography>
                            </Button>
                        </Box>
                    </div>
                </div>
            </div>
        </section>
    );
};
