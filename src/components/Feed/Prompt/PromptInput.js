import { IconButton, InputAdornment, TextField, styled } from "@mui/material";
import { LoadingModal } from "../LoadingModal";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

import { connect } from "react-redux";
import { getActions } from "../../../store/actions/authActions";
import AnswerModal from "./AnswerModal";

export const PromptInput = ({ isPortrait, sendPrompt }) => {
    const [answerOpen, setAnswerOpen] = React.useState(false);
    const handleOpenAnswer = () => setAnswerOpen(true);
    const handleCloseAnswer = () => setAnswerOpen(false);

    const [loadingOpen, setLoadingOpen] = React.useState(false);
    const handleOpenLoading = () => setLoadingOpen(true);
    const handleCloseLoading = () => setLoadingOpen(false);

    const closeModal = () => {
        console.log("closing modal");
        setPromptValue("");
        handleCloseLoading();
        handleCloseAnswer();
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
        "& label.Mui-focused": {
            color: "white",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#32c4a7",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#32c4a7",
            },
            "&:hover fieldset": {
                borderColor: "#32c4a7",
            },
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

    return (
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
                isPortrait={isPortrait}
                open={answerOpen}
                handleClose={closeModal}
                user={promptValue}
                ai={aiValue}
            />
            <LoadingModal isPortrait={isPortrait} open={loadingOpen} />
        </>
    );
};
const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    };
};

export default connect(null, mapActionsToProps)(PromptInput);
