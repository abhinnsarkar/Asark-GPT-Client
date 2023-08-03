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
                    // bgcolor: "green",
                }}
            >
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
                                    width: isPortrait ? "90%" : "25%",
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
                        height: "12vh",
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
                            <Typography
                                variant={isPortrait ? "h2" : "h1"}
                                fontWeight="bold"
                                sx={{ color: "#32c4a7" }}
                            >
                                Login
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box
                    className="login-input-box"
                    sx={{
                        width: "100vw",
                        height: "20vh",
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
                            />
                        </Box>
                    </Box>
                </Box>

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
                                    width: isPortrait ? "90%" : "25%",
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
                                <Typography textTransform="none">
                                    Login
                                </Typography>{" "}
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
