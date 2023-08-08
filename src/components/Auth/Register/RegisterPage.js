import { Box, CssBaseline } from "@mui/material";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getActions } from "../../../store/actions/authActions";
import { LoadingModal } from "../../Feed/LoadingModal";
import RegisterHeader from "./RegisterHeader";
import RegisterMiddle from "./RegisterMiddle";
import RegisterFooter from "./RegisterFooter";
import useGetIsLoggedIn from "../../../shared/utils/useGetIsLoggedIn";

const RegisterPage = ({ isLaptop, isPortrait, register }) => {
    const navigate = useNavigate();

    const [loadingOpen, setLoadingOpen] = React.useState(false);
    const handleOpenLoading = () => setLoadingOpen(true);
    const handleCloseLoading = () => setLoadingOpen(false);

    const closeModal = () => {
        console.log("closing modal");
        handleCloseLoading();
    };

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        const user = { name, email, password };
        handleOpenLoading();
        await register(user, navigate).then(() => {
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
                    // bgcolor: "green",
                }}
            >
                <RegisterHeader
                    isLaptop={isLaptop}
                    isPortrait={isPortrait}
                    navigate={navigate}
                />
                <RegisterMiddle
                    isPortrait={isPortrait}
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleSubmit={handleSubmit}
                />

                <RegisterFooter
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
        ...getActions(dispatch),
    };
};

export default connect(null, mapActionsToProps)(RegisterPage);
