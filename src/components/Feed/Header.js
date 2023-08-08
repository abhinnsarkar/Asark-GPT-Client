import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountModal from "./Account/AccountModal";

export const Header = ({ isLaptop, isPortrait }) => {
    const [disabled, setDisabled] = React.useState();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const decideDisabled = () => {
        // console.log(
        //     "is Portrait is ",
        //     isPortrait,
        //     " so button is disbaled? : ",
        //     !isPortrait
        // );
        // console.log(
        //     "is Laptop is ",
        //     isLaptop,
        //     " so button is disbaled? : ",
        //     isLaptop
        // );
    };
    useEffect(() => {
        const condition1 = !isLaptop && !isPortrait;
        const condition2 = !isLaptop && isPortrait;
        const condition3 = isLaptop && !isPortrait;
        if ((condition1 || condition2) && open) {
        } else {
            handleClose();
        }
        // if ((!isPortrait || isLaptop) && open) {
        //     handleClose();
        // }
        if (condition1 || condition2) {
            setDisabled(false);
        }
        if (condition3) {
            setDisabled(true);
        }

        // console.log(
        //     "is Portrait is ",
        //     isPortrait,
        //     " so button is disbaled? : ",
        //     !isPortrait
        // );
        // console.log(
        //     "is Laptop is ",
        //     isLaptop,
        //     " so button is disbaled? : ",
        //     isLaptop
        // );
    });
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    height: "10vh",
                    flexDirection: "row",
                }}
            >
                <Box
                    sx={{
                        width: isPortrait || !isLaptop ? "10%" : "40%",
                        height: "100%",
                        // bgcolor: "red",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    variant="contained"
                    overflow="hidden"
                >
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            bgcolor: "#202123",
                            textAlign: "center",
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "center",
                            width: isPortrait ? "100%" : "95%",
                            height: "90%",
                            color: "white",
                            "&:hover": {
                                bgcolor: "#202123",
                                width: "100%",
                                height: "100%",
                            },
                            border: "2px solid #32c4a7",
                            borderRadius: "10px",
                        }}
                        style={{
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                        }}
                        disabled={disabled}
                        onClick={handleOpen}
                    >
                        {isPortrait || !isLaptop ? (
                            <></>
                        ) : (
                            <>
                                <Typography textTransform={"none"}>
                                    Account
                                </Typography>{" "}
                            </>
                        )}
                        <AccountCircleIcon />
                    </Button>
                </Box>

                <Box
                    sx={{
                        width: isPortrait || !isLaptop ? "90%" : "60%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box
                        variant="contained"
                        color="primary"
                        sx={{
                            bgcolor: "#202123",
                            textAlign: "center",
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "center",
                            width: "99%",
                            height: "90%",
                            color: "white",
                            "&:hover": { bgcolor: "#202123" },
                            border: "2px solid #32c4a7",
                            borderRadius: "10px",
                        }}
                        style={{
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                        }}
                    >
                        <Typography variant="h5" textTransform={"none"}>
                            Chatting with "Asark"
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <AccountModal
                isPopup={true}
                isLaptop={isLaptop}
                isPortrait={isPortrait}
                open={open}
                handleClose={handleClose}
            />
        </>
    );
};
