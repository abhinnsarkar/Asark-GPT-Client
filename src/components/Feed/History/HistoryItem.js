import { Box, Typography } from "@mui/material";
import React from "react";

export const HistoryItem = ({ user, ai }) => {
    console.log("user is ", user);
    console.log("ai is ", ai);
    return (
        <Box
            sx={{
                width: "99%",
                marginBottom: "2%",
                border: "2px solid #32c4a7",
                borderRadius: "10px",
            }}
        >
            <Box sx={{ marginLeft: "1%" }}>
                <Typography variant="h6">{user}</Typography>
            </Box>

            <Box sx={{ marginLeft: "1%" }}>
                <Typography variant="body">{ai}</Typography>
            </Box>
        </Box>
    );
};
