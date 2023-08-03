import React from "react";
import { CustomInput } from "../CustomInput";

const LoginInputs = ({ email, setEmail, password, setPassword }) => {
    return (
        <>
            <CustomInput
                value={email}
                setValue={setEmail}
                placeholder="Email"
                type="text"
            />
            <CustomInput
                value={password}
                setValue={setPassword}
                placeholder="Password"
                type="password"
            />
        </>
    );
};

export default LoginInputs;
