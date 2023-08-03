import CircularProgress from "@mui/material/CircularProgress";
import React, { useEffect, useState } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Box, IconButton, Typography } from "@mui/material";
import { HistoryItem } from "./HistoryItem";
import { getMessages, getActions } from "../../../store/actions/promptActions";
import { connect } from "react-redux";

const History = ({ isLaptop, isPortrait, getMessages }) => {
    const [msgsLoading, setMsgsLoading] = useState(true);
    const [prevMsgs, setPrevMsgs] = useState([]);

    const refresh = async () => {
        setMsgsLoading(true);
        fetchData();
    };

    const fetchData = async () => {
        try {
            const previousMsgs = await getMessages();
            var arrayOfPrevMsgs = [];
            setTimeout(function () {
                const keys = Object.keys(previousMsgs);

                for (let i = 0; i < keys.length; i++) {
                    arrayOfPrevMsgs.push(previousMsgs[keys[i]]);
                }
                setPrevMsgs(arrayOfPrevMsgs.reverse());
                setMsgsLoading(false);
            }, 2000); // The inline function will be executed after a delay of 3000 milliseconds (3 seconds).
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        setTimeout(fetchData, 2000);
    }, []);

    return (
        <Box
            sx={{
                width: "99%",
                height: "100%",
                border: "2px solid #32c4a7",
                borderRadius: "10px",
                display: "flex",
                alignContent: "center",
                flexDirection: "column",
                justifyContent: "center",
                bgcolor: "#202123",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    // height: "10%",
                    height: !isLaptop ? "15%" : "10%",
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "space-between",
                    // bgcolor: "blue",
                }}
            >
                <Box
                    sx={{
                        width: "75%",
                        display: "flex",
                        alignContent: "center",
                        textAlign: "center",
                        // bgcolor: "red",
                    }}
                >
                    <Typography
                        sx={{
                            // marginTop: "3%",
                            marginTop: !isLaptop ? "0%" : "3%",
                            marginLeft: "2%",
                        }}
                        variant={isPortrait || !isLaptop ? "h5" : "h4"}
                    >
                        Refresh previous chats
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        // flexDirection:'folumn',
                        height: "100%",
                        // bgcolor: "red",
                    }}
                >
                    <IconButton onClick={refresh}>
                        <RefreshIcon fontSize="large" />
                    </IconButton>
                </Box>
            </Box>
            {!isLaptop ? <br></br> : <></>}
            <Box
                sx={{
                    width: "100%",
                    height: "90%",
                    alignItems: "center",
                    overflow: "auto",
                    display: "-webkit-box",
                    color: "white",
                    "-webkit-line-clamp": 3,
                    "-webkit-box-orient": "vertical",
                }}
            >
                {msgsLoading ? (
                    <CircularProgress />
                ) : (
                    prevMsgs.map((chat) => {
                        return <HistoryItem user={chat.user} ai={chat.ai} />;
                    })
                )}
            </Box>
        </Box>
    );
};

const mapActionsToProps = (dispatch) => {
    return {
        getMessages,
        ...getActions(dispatch),
    };
};

export default connect(null, mapActionsToProps)(History);
