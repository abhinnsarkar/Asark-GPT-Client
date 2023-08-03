import { Box, Button, Typography } from "@mui/material";
import "./landing.css";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const WelcomePage = ({ isLaptop, isPortrait }) => {
    const navigate = useNavigate();
    // console.log("getting thw welcome page");
    // console.log("portrait ? ", isPortrait);

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
                                width: isPortrait ? "100vw" : "40vw",
                                height: "10vh",
                                // bgcolor: "red",
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
                                    // width: isLaptop ? "40%" : "90%",
                                    width: "40%",
                                    height: isLaptop ? "4vh" : "12vh",
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
                                    // width: isLaptop ? "40%" : "90%",
                                    height: isLaptop ? "4vh" : "12vh",
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
