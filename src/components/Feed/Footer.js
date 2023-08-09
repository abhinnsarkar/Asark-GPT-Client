import { Box } from "@mui/material";
import React from "react";
import PromptInput from "../Feed/Prompt/PromptInput";

export const Footer = ({ isLaptop, isPortrait }) => {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "10vh",
                // height: "100%",
                // paddingTop: "1vh",
                // bgcolor: "blue",
                // marginBottom: "1%",
            }}
        >
            <PromptInput isLaptop={isLaptop} isPortrait={isPortrait} />
        </Box>
    );
};
