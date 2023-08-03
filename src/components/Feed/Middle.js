import { Box, CssBaseline, Typography } from "@mui/material";
import React from "react";
import store from "../../store/store";
import { Logout } from "./Account/Logout";
import { DeleteAccount } from "./Account/DeleteAccount";
import { makeStyles } from "@mui/styles";
import Avatar from "../../shared/utils/Avatar";
import { Footer } from "./Footer";
import History from "./History/History";

const useStyles = makeStyles((theme) => ({
    customBox: {
        height: "55%",
        width: "auto",
        aspectRatio: "1 / 1",
    },
}));
export const Middle = ({ isLaptop, isPortrait }) => {
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
        <React.Fragment>
            <CssBaseline />
            <Box
                sx={{
                    height: "90vh",
                    width: "100%",
                    color: "white",
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                {isPortrait || !isLaptop ? (
                    <></>
                ) : (
                    <>
                        <Box
                            className="left-panel"
                            sx={{
                                width: "40%",
                                height: "100%",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Box
                                className="box-main"
                                sx={{
                                    width: "95%",
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
                                            <DeleteAccount />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </>
                )}

                <Box
                    sx={{
                        width: isPortrait || !isLaptop ? "100%" : "60%",
                        height: "100%",
                    }}
                >
                    <Box
                        className="chats"
                        sx={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            // height: "88%",
                            height: isPortrait || !isLaptop ? "75%" : "88%",
                            paddingTop: "1vh",
                        }}
                    >
                        <History isLaptop={isLaptop} isPortrait={isPortrait} />
                    </Box>
                    <Box
                        className="prompt"
                        sx={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "12%",
                            paddingTop: "1vh",
                        }}
                    >
                        <Footer isLaptop={isLaptop} isPortrait={isPortrait} />
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    );
};
