import { Box } from "@mui/material";
import React from "react";
import PromptInput from "../Feed/Prompt/PromptInput";

export const Footer = ({ isPortrait }) => {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                height: "100%",
                paddingTop: "1vh",
                color: "red",
            }}
        >
            <PromptInput isPortrait={isPortrait} />
        </Box>
    );
};
