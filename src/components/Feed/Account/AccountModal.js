import CloseIcon from "@mui/icons-material/Close";
import { Box, Modal, Typography, IconButton } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@mui/styles";
import Avatar from "../../../shared/utils/Avatar";
import store from "../../../store/store";
import { Logout } from "./Logout";
import { DeleteAccount } from "./DeleteAccount";
const useStyles = makeStyles((theme) => ({
    customBox: {
        height: "35%",
        width: "auto",
        aspectRatio: "1 / 1",
    },
}));
const AccountModal = ({ isPortrait, open, handleClose }) => {
    const classes = useStyles();

    let user;
    let email;
    let name;

    if (typeof store.getState().authReducer === "object") {
        user = store.getState().authReducer.user;
        email = user.email;
        name = user.name;
    } else {
        if (typeof store.getState().authReducer === "string") {
            user = JSON.parse(store.getState().authReducer.user);
            email = user.email;
            name = user.name;
        }
    }

    return (
        <Modal open={open} onClose={handleClose}>
            <Box
                className="left-panel"
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: isPortrait ? "95vw" : "75vw",
                    height: isPortrait ? "95vh" : "75vh",
                    bgcolor: "#202123",
                    border: "2px solid #32c4a7",
                    borderRadius: "15px",
                    boxShadow: 24,
                    p: 4,
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <>
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "end",
                        }}
                    >
                        <IconButton onClick={handleClose}>
                            <CloseIcon fontSize="large" />
                        </IconButton>
                    </Box>
                    <Box
                        className="box-main"
                        sx={{
                            width: isPortrait ? "100%" : "50%",
                            marginTop: "1%",
                            height: "99%",
                            bgcolor: "#202123",
                            border: "2px solid #32c4a7",
                            borderRadius: "15px",
                            boxShadow: 24,
                            p: 4,
                        }}
                    >
                        <Box
                            variant="contained"
                            color="primary"
                            sx={{
                                marginTop: "2%",
                                bgcolor: "#202123",
                                textAlign: "center",
                                flexDirection: "column",
                                display: "flex",
                                width: "100%",
                                height: "100%",
                                color: "white",
                            }}
                            style={{
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                            }}
                        >
                            <Box
                                className={classes.customBox}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Avatar username={name} />
                            </Box>

                            <Box
                                className="box-user-info"
                                sx={{
                                    width: "100%",
                                    height: "20%",
                                    display: "flex",
                                    alignItems: "flex-start",
                                    flexDirection: "column",
                                }}
                            >
                                <Box
                                    className="box-user-info-name"
                                    sx={{
                                        display: "flex",
                                        width: "100%",
                                        height: "50%",
                                        color: "white",
                                        alignItems: "center",
                                        justifyItems: "center",
                                        overflow: "auto",
                                        display: "-webkit-box",
                                        color: "white",
                                        "-webkit-line-clamp": 3,
                                        "-webkit-box-orient": "horizontal",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            marginLeft: "2%",
                                        }}
                                        variant="h5"
                                    >
                                        Name : {name}
                                    </Typography>
                                </Box>
                                <Box
                                    className="box-user-info-email"
                                    sx={{
                                        display: "flex",
                                        width: "100%",
                                        height: "50%",
                                        color: "white",
                                        alignItems: "center",
                                        justifyItems: "center",
                                        overflow: "auto",
                                        display: "-webkit-box",
                                        color: "white",
                                        "-webkit-line-clamp": 3,
                                        "-webkit-box-orient": "horizontal",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            marginLeft: "2%",
                                        }}
                                        variant="h5"
                                    >
                                        Email : {email}
                                    </Typography>
                                </Box>
                            </Box>

                            <Box
                                className="box-buttons"
                                sx={{
                                    height: "25%",
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-evenly",
                                    flexDirection: "column",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "space-evenly",
                                    }}
                                >
                                    <Logout />
                                    <DeleteAccount isPortrait={isPortrait} />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </>
            </Box>
        </Modal>
    );
};

export default AccountModal;
