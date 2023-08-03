import React from "react";
import { CustomInput } from "../CustomInput";

const RegisterInputs = ({
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
}) => {
    return (
        <>
            <CustomInput
                value={name}
                setValue={setName}
                placeholder="Name"
                type="text"
            />
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

export default RegisterInputs;
