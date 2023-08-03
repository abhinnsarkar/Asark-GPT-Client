import React from "react";
import { styled } from "@mui/system";

const Wrapper = styled("div")({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "90%",
});

const Input = styled("input")({
    "& label.Mui-focused": {
        color: "white",
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "#4c4c4e",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#4c4c4e",
        },
        "&:hover fieldset": {
            borderColor: "#4c4c4e",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#4c4c4e",
        },
        input: {
            color: "white",
        },
    },
    flexGrow: 1,
    // height: "40px",
    height: "6vh",
    border: "1px solid #4c4c4e",
    borderRadius: "10px",
    color: "white",
    background: "#202123",
    margin: 0,
    fontSize: "16px",
    padding: "0 5px",
});

export const CustomInput = (props) => {
    const { value, setValue, placeholder, type } = props;

    const handleValueChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Wrapper>
            <Input
                value={value}
                onChange={handleValueChange}
                type={type}
                placeholder={placeholder}
            />
        </Wrapper>
    );
};
