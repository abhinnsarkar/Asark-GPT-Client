import { Box, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

const AnswerModal = ({ isLaptop, isPortrait, open, handleClose, user, ai }) => {
    return (
        <Modal open={open} onClose={handleClose}>
            <Box
                className="answer-modal"
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: isPortrait || !isLaptop ? "100vw" : "75vw",
                    height: isPortrait || !isLaptop ? "100vh" : "75vh",
                    bgcolor: "#202123",
                    // bgcolor: "red",
                    border: "5px solid #32c4a7",
                    borderRadius: "15px",
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "end",
                        width: "100%",
                    }}
                >
                    <IconButton onClick={handleClose}>
                        <CloseIcon fontSize="large" />
                    </IconButton>
                </Box>

                <Box
                    className="user-shell"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        bgcolor: "#202123",
                        border: "2px solid #32c4a7",
                        borderRadius: "10px",
                    }}
                >
                    <Box
                        className="user-box"
                        sx={{
                            width: "95%",
                            maxHeight: isPortrait ? "10vh" : "20vh",
                            overflow: "auto",
                            display: "-webkit-box",
                            color: "white",
                            "-webkit-line-clamp": 3,
                            "-webkit-box-orient": "vertical",
                        }}
                    >
                        <Typography variant={isPortrait ? "h5" : "h3"}>
                            {user}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    className="ai-shell"
                    sx={{
                        marginTop: "2%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        bgcolor: "#202123",
                        border: "2px solid #32c4a7",
                        borderRadius: "10px",
                    }}
                >
                    <Box
                        className="ai-box"
                        sx={{
                            width: "95%",
                            maxHeight: isPortrait ? "70vh" : "",
                            overflow: "auto",
                            display: "-webkit-box",
                            color: "white",
                            "-webkit-line-clamp": 3,
                            "-webkit-box-orient": "vertical",
                        }}
                    >
                        <Typography variant="body">{ai}</Typography>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
};

export default AnswerModal;
