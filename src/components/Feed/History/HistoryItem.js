import { Box, Typography } from "@mui/material";
import React from "react";

export const HistoryItem = ({ isPortrait, user, ai }) => {
    console.log("user is ", user);
    console.log("ai is ", ai);
    return (
        <Box
            sx={{
                width: "99%",
                marginBottom: "2%",
                border: "2px solid #32c4a7",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Box sx={{ width: !isPortrait ? "98%" : "95%" }}>
                <Typography variant="h6">{user}</Typography>
            </Box>

            <Box sx={{ width: !isPortrait ? "98%" : "95%" }}>
                <Typography variant="body">{ai}</Typography>
            </Box>
        </Box>
    );
};
