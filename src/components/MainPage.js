import { Box } from "@mui/material";
import React from "react";
import { Feed } from "./Feed/Feed";
import { Navigate } from "react-router-dom";
export const MainPage = ({ isLaptop, isPortrait }) => {
    if (localStorage.token) {
        return (
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <Feed isLaptop={isLaptop} isPortrait={isPortrait} />
            </Box>
        );
    }
    return <Navigate to="/" />;
};
