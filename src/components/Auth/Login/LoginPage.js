import { Box, Button, CssBaseline, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import LoginInputs from "./LoginInputs";
import { connect } from "react-redux";
import { getActions } from "../../../store/actions/authActions";

const LoginPage = ({ isPortrait, login }) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = { email, password };
        await login(user, navigate);
    };

    if (localStorage.token) {
        return <Navigate to="/home" />;
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Box
                sx={{
                    width: "100vw",
                    height: "100vh",
                    bgcolor: "#202123",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Box
                    sx={{
                        width: "80%",
                        height: "10%",
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Box
                        sx={{
                            width: "73%",
                            height: "80%",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Button
                            sx={{
                                bgcolor: "#32c4a7",
                                width: isPortrait ? "75%" : "25%",
                                height: "75%",
                                color: "white",
                                borderRadius: "10px",
                                "&:hover": {
                                    bgcolor: "#228572",
                                },
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
                <Box
                    sx={{
                        width: "80%",
                        height: "80%",
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            height: "25%",
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                        }}
                    >
                        <Box
                            sx={{
                                width: "73%",
                                height: isPortrait ? "50%" : "80%",
                            }}
                        >
                            <Typography
                                variant={isPortrait ? "h2" : "h1"}
                                fontWeight="bold"
                                sx={{ color: "#32c4a7" }}
                            >
                                Login
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            height: isPortrait ? "30%" : "50%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                width: "80%",
                                height: "100%",
                                justifyContent: "space-evenly",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <LoginInputs
                                email={email}
                                setEmail={setEmail}
                                password={password}
                                setPassword={setPassword}
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            height: "25%",
                            justifyContent: "space-evenly",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                width: "80%",
                                height: "100%",
                                justifyContent: "space-evenly",
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "90%",
                                    height: "100%",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: "10%",
                                    }}
                                ></Box>
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: "40%",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <Button
                                        sx={{
                                            bgcolor: "#32c4a7",
                                            width: isPortrait ? "75%" : "20%",
                                            height: "75%",
                                            color: "white",
                                            borderRadius: "10px",
                                            "&:hover": {
                                                bgcolor: "#228572",
                                            },
                                        }}
                                        onClick={handleSubmit}
                                    >
                                        <Typography textTransform="none">
                                            Sign Up
                                        </Typography>
                                    </Button>
                                </Box>
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: "10%",
                                    }}
                                >
                                    <Link to="/login">
                                        Already Have an account? Login
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    );
};
const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    };
};

export default connect(null, mapActionsToProps)(LoginPage);
