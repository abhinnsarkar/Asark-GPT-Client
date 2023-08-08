import React from "react";
import { Box, Typography } from "@mui/material";

const Avatar = ({ isPopup, name }) => {
    console.log("name is ", name);
    return (
        <Box
            sx={{
                bgcolor: "#32c4a7",
                // width: "55vw",
                width: isPopup ? "55vw" : "22vw",
                height: isPopup ? "55vw" : "22vw",
                // height: "55vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "150px",
            }}
        >
            <Typography
                sx={{
                    fontSize: "4em",
                    fontWeight: 700,
                }}
            >
                {name.split("")[0]}
            </Typography>
        </Box>
    );
};

export default Avatar;
