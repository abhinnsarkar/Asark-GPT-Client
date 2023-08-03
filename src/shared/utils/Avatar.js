import React from "react";
import { styled } from "@mui/styles";
import { Typography } from "@mui/material";

const AvatarPreview = styled("div")({
    height: "95%",
    width: "95%",
    backgroundColor: "#32c4a7",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    fontWeight: "700",
    color: "white",
});

const Avatar = ({ username, large }) => {
    const name = username.split("")[0] + username.split("")[1];
    var fontSize;
    if (large) {
        fontSize = "30px";
    } else {
        fontSize = "4em";
    }
    return (
        <AvatarPreview style={large ? { height: "80px", width: "80px" } : {}}>
            <Typography
                sx={{
                    fontSize: { fontSize },
                    fontWeight: 700,
                }}
            >
                {name}
            </Typography>
        </AvatarPreview>
    );
};

export default Avatar;
