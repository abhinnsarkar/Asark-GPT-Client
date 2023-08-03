import { Box, Button, CssBaseline, Typography } from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import RegisterInputs from "./RegisterInputs";
import { connect } from "react-redux";
import { getActions } from "../../../store/actions/authActions";

const RegisterPage = ({ isPortrait, register }) => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = { name, email, password };
        await register(user, navigate);
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
                    className="register-header-box"
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
                        className="register-header-center-box-1"
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
                                className="register-header-button"
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
                    className="register-title-box"
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
                        className="register-title-center-box-1"
                        sx={{
                            width: "100%",
                            // bgcolor: "orange",
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: 0,
                        }}
                    >
                        <Box
                            className="register-title-center-box-2"
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
                                Sign Up
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box
                    className="register-input-box"
                    sx={{
                        width: "100vw",
                        height: "30vh",
                        // bgcolor: "pink",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Box
                        className="register-input-center-box-1"
                        sx={{
                            width: "100%",
                            height: "100%",
                            // bgcolor: "orange",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Box
                            className="register-input-center-box-2"
                            sx={{
                                // bgcolor: "purple",
                                width: "75%",
                            }}
                        >
                            <RegisterInputs
                                name={name}
                                setName={setName}
                                email={email}
                                setEmail={setEmail}
                                password={password}
                                setPassword={setPassword}
                            />
                        </Box>
                    </Box>
                </Box>

                <Box
                    className="register-submit-box"
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
                        className="register-submit-center-box-1"
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
                                    Sign Up
                                </Typography>{" "}
                                <PersonAddAltIcon />
                            </Button>
                        </Box>
                    </Box>
                </Box>

                <Box
                    className="register-title-box"
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
                        className="register-title-center-box-1"
                        sx={{
                            width: "100%",
                            // bgcolor: "orange",
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: 0,
                        }}
                    >
                        <Box
                            className="register-title-center-box-2"
                            sx={{
                                // bgcolor: "purple",
                                width: "75%",
                            }}
                        >
                            <Link to="/login">
                                Already Have an account? Login
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

export default connect(null, mapActionsToProps)(RegisterPage);
