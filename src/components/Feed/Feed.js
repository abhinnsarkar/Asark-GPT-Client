import { Box, CssBaseline } from "@mui/material";
import React from "react";
import { Header } from "./Header";
import { Middle } from "./Middle";

export const Feed = ({ isLaptop, isPortrait }) => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Box
                sx={{
                    width: "100%",
                    height: "100vh",
                    bgcolor: "#202123",
                }}
            >
                <Header isLaptop={isLaptop} isPortrait={isPortrait} />
                <Middle isLaptop={isLaptop} isPortrait={isPortrait} />
            </Box>
        </React.Fragment>
    );
};
