import { Box, CssBaseline } from "@mui/material";

import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getAuthActions } from "../../../store/actions/authActions";
import { LoadingModal } from "../../Feed/LoadingModal";
import LoginHeader from "./LoginHeader";
import LoginMiddle from "./LoginMiddle";
import LoginFooter from "./LoginFooter";
import useGetIsLoggedIn from "../../../shared/utils/useGetIsLoggedIn";

const LoginPage = ({ isLaptop, isPortrait, login }) => {
    const navigate = useNavigate();

    const [loadingOpen, setLoadingOpen] = React.useState(false);
    const handleOpenLoading = () => setLoadingOpen(true);
    const handleCloseLoading = () => setLoadingOpen(false);

    const closeModal = () => {
        console.log("closing modal");
        handleCloseLoading();
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        const user = { email, password };
        handleOpenLoading();
        await login(user, navigate).then(() => {
            closeModal();
        });
    };

    if (useGetIsLoggedIn()) {
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
                <LoginHeader
                    isLaptop={isLaptop}
                    isPortrait={isPortrait}
                    navigate={navigate}
                />

                <LoginMiddle
                    isPortrait={isPortrait}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleSubmit={handleSubmit}
                />
                <LoginFooter
                    isPortrait={isPortrait}
                    handleSubmit={handleSubmit}
                />
            </Box>
            <LoadingModal
                isLaptop={isLaptop}
                isPortrait={isPortrait}
                open={loadingOpen}
            />
        </React.Fragment>
    );
};
const mapActionsToProps = (dispatch) => {
    return {
        ...getAuthActions(dispatch),
    };
};

export default connect(null, mapActionsToProps)(LoginPage);
