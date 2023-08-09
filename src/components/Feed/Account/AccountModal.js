import CloseIcon from "@mui/icons-material/Close";
import { Box, Modal, Typography, IconButton } from "@mui/material";
import React from "react";
import { connect, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import Avatar from "../../../shared/components/Avatar";
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
const AccountModal = ({ isPopup, isLaptop, isPortrait, open, handleClose }) => {
    const classes = useStyles();
    var email;
    var usersname;
    console.log("store state is", typeof store.getState());

    const user = useSelector((state) => state.authReducer.user);
    console.log("user is of type ", typeof user);
    if (typeof user === "string") {
        email = JSON.parse(user).email;
        usersname = JSON.parse(user).name;
    } else {
        console.log("in the else of the account modal");
        console.log(store.getState());
        email = user.email;
        usersname = user.name;
    }

    // const email = store.getState().authReducer.user.email;
    // const name = store.getState().authReducer.user.name;

    console.log("name is in accountmodal ", usersname);

    return (
        <Modal open={open} onClose={handleClose}>
            <Box
                className="left-panel"
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: isPortrait || !isLaptop ? "100vw" : "75vw",
                    // width: isPortrait || !isLaptop ? "95vw" : "75vw",
                    // height: isPortrait || !isLaptop ? "95vh" : "75vh",
                    height: isPortrait || !isLaptop ? "100vh" : "75vh",
                    bgcolor: "#202123",
                    border: "2px solid #32c4a7",
                    borderRadius: "15px",
                    boxShadow: 24,
                    // p: 4,
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
                            // bgcolor: "red",
                        }}
                    >
                        <IconButton onClick={handleClose}>
                            <CloseIcon fontSize="large" />
                        </IconButton>
                    </Box>
                    <Box
                        className="box-main"
                        sx={{
                            width: isPortrait || !isLaptop ? "90%" : "50%",
                            // bgcolor: "green",
                            marginTop: "1%",
                            height: "98%",
                            bgcolor: "#202123",
                            // border: "2px solid #32c4a7",
                            borderRadius: "15px",
                            // boxShadow: 24,
                            // p: 4,
                        }}
                    >
                        <Box
                            variant="contained"
                            color="primary"
                            sx={{
                                marginTop: "2%",
                                // bgcolor: "#202123",
                                // bgcolor: "blue",
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
                            {!isLaptop && !isPortrait ? (
                                <></>
                            ) : (
                                <Box
                                    className={classes.customBox}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        // bgcolor: "red",
                                    }}
                                >
                                    <Avatar
                                        isPopup={isPopup}
                                        name={usersname}
                                    />
                                </Box>
                            )}

                            <Box
                                className="box-user-info"
                                sx={{
                                    width: "100%",
                                    // bgcolor: "blue",
                                    // height: "20%",
                                    height:
                                        !isLaptop && !isPortrait
                                            ? "35%"
                                            : "20%",
                                    display: "flex",
                                    alignItems: "flex-start",
                                    flexDirection: "column",
                                }}
                            >
                                <Box
                                    className="box-user-info-name"
                                    sx={{
                                        // bgcolor: "red",
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
                                        Name : {usersname}
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
                                    // bgcolor: "red",
                                    // height: "25%",
                                    height:
                                        !isLaptop && !isPortrait
                                            ? "50%"
                                            : "25%",
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
                                    <Logout
                                        isLaptop={isLaptop}
                                        isPortrait={isPortrait}
                                    />
                                    <DeleteAccount
                                        isLaptop={isLaptop}
                                        isPortrait={isPortrait}
                                    />
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
