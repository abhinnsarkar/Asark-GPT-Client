import React from "react";
import { Box, CircularProgress, Modal } from "@mui/material";

export const LoadingModal = ({ isPortrait, open }) => {
    return (
        <Modal open={open}>
            <Box
                className="answer-modal"
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: isPortrait ? "50vw" : "10vw",
                    height: isPortrait ? "50vw" : "10vw",
                    bgcolor: "#202123",
                    border: "5px solid #32c4a7",
                    borderRadius: "15px",
                    boxShadow: 24,
                    p: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <CircularProgress />
            </Box>
        </Modal>
    );
};
