import { IconButton, InputAdornment, TextField, styled } from "@mui/material";
import { LoadingModal } from "../LoadingModal";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

import { connect, useDispatch } from "react-redux";
import {
    sendPrompt,
    getPromptActions,
    // getMessages,
} from "../../../store/actions/promptActions";
import AnswerModal from "./AnswerModal";
import { openAlertMessage } from "../../../store/actions/alertActions";

// export const PromptInput = ({ isLaptop, isPortrait, sendPrompt }) => {
export const PromptInput = ({ isLaptop, isPortrait, sendPrompt, dispatch }) => {
    const [answerOpen, setAnswerOpen] = React.useState(false);
    const handleOpenAnswer = () => setAnswerOpen(true);
    const handleCloseAnswer = () => setAnswerOpen(false);

    const [loadingOpen, setLoadingOpen] = React.useState(false);
    const handleOpenLoading = () => setLoadingOpen(true);
    const handleCloseLoading = () => setLoadingOpen(false);

    const useCloseModal = async () => {
        // const dispatch = useDispatch();
        // const useCloseModal = (dispatch) => {
        console.log("closing modal");
        setPromptValue("");
        handleCloseLoading();
        handleCloseAnswer();
        console.log("abt to display alert");
        dispatch(
            openAlertMessage("Click the realod icon to display message", "info")
        );
        // await getMessages();
    };

    const [promptValue, setPromptValue] = useState("");

    const [aiValue, setAiValue] = useState("");
    const handlePromptChange = (event) => {
        setPromptValue(event.target.value);
    };
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSend();
        }
    };

    const getResponse = async () => {
        return await sendPrompt(promptValue);
    };

    const handleSend = async () => {
        handleOpenLoading();
        console.log("prompt is : ", promptValue);
        const answer = await getResponse();

        console.log("answer is ", answer);
        setAiValue(answer);
        handleOpenAnswer();
    };

    const CssTextField = styled(TextField)({
        // "& label.Mui-focused": {
        //     color: "white",
        // },
        // "& .MuiInput-underline:after": {
        //     borderBottomColor: "#32c4a7",
        // },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#32c4a7",
            },
            // "&:hover fieldset": {
            //     borderColor: "#32c4a7",
            // },
            "&.Mui-focused fieldset": {
                borderColor: "#32c4a7",
            },
            input: {
                color: "white",
            },
        },
    });
    const labelStyle = {
        color: "white",
    };

    const MainContainer = styled("div")({
        height: "50%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    });

    const Input = styled("input")({
        backgroundColor: "#202123",
        borderColor: "#32c4a7",
        width: "97%",
        height: "100%",
        color: "white",
        // border: "none",
        borderRadius: "10px",
        fontSize: "14px",
        padding: "0 10px",
        // marginBottom: "0px",
    });

    return (
        // <>
        //     <MainContainer>
        //         <Input
        //             placeholder="Prompt"
        //             value={promptValue}
        //             onChange={handlePromptChange}
        //             onKeyDown={handleKeyDown}
        //         />

        //         <IconButton
        //             color="primary"
        //             edge="end"
        //             sx={{
        //                 "&:hover": {
        //                     bgcolor: "#32c4a7",
        //                 },
        //                 marginRight: "0.25em",
        //             }}
        //             onClick={handleSend}
        //         >
        //             <SendIcon />
        //         </IconButton>
        //     </MainContainer>
        //     <AnswerModal
        //         isLaptop={isLaptop}
        //         isPortrait={isPortrait}
        //         open={answerOpen}
        //         handleClose={useCloseModal}
        //         user={promptValue}
        //         ai={aiValue}
        //     />
        //     <LoadingModal
        //         isLaptop={isLaptop}
        //         isPortrait={isPortrait}
        //         open={loadingOpen}
        //     />
        // </>

        <>
            <CssTextField
                label="Prompt..."
                value={promptValue}
                onChange={handlePromptChange}
                onKeyDown={handleKeyDown}
                autoFocus={true}
                type="text"
                InputLabelProps={{
                    style: labelStyle,
                }}
                sx={{
                    borderWidth: "2px",
                    // marginTop: "1%",
                    width: "99%",
                    ".MuiOutlinedInput-root": {
                        borderRadius: "10px",
                    },
                }}
                key="prompt"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                color="primary"
                                edge="end"
                                sx={{
                                    "&:hover": {
                                        bgcolor: "#32c4a7",
                                    },
                                    marginRight: "0.25em",
                                }}
                                onClick={handleSend}
                            >
                                <SendIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <AnswerModal
                isLaptop={isLaptop}
                isPortrait={isPortrait}
                open={answerOpen}
                handleClose={useCloseModal}
                user={promptValue}
                ai={aiValue}
            />
            <LoadingModal
                isLaptop={isLaptop}
                isPortrait={isPortrait}
                open={loadingOpen}
            />
        </>
    );
};
// const mapActionsToProps = (dispatch) => {
//     return {
//         sendPrompt,
//         ...getPromptActions(dispatch),
//     };
// };

const mapActionsToProps = (dispatch) => {
    return {
        sendPrompt,
        ...getPromptActions(dispatch),
        dispatch, // Include the dispatch function in props
    };
};

export default connect(null, mapActionsToProps)(PromptInput);
