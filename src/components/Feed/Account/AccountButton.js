import React from "react";
import { Button, Typography } from "@mui/material";

export const AccountButton = ({ title, fn, icon, isLaptop, isPortrait }) => {
    return (
        <Button
            variant="contained"
            onClick={fn}
            sx={{
                bgcolor: "#202123",
                textAlign: "center",
                // height: "25%",
                height: !isLaptop && !isPortrait ? "50%" : "25%",
                color: "white",
                border: "2px solid red",
                borderRadius: "10px",
                width: isPortrait ? "100%" : "95%",
                "&:hover": {
                    bgcolor: "#202123",
                    width: "100%",
                    // height: "27%",
                    height: !isLaptop && !isPortrait ? "52%" : "27%",
                },
                marginTop: "10px",
            }}
            style={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
            }}
        >
            <Typography noWrap textTransform="none">
                {title}
            </Typography>{" "}
            {icon}
        </Button>
    );
};
