import * as api from "../../api";
import { logout } from "../../shared/utils/logout";

import { openAlertMessage } from "./alertActions";

export const getActions = (dispatch) => {
    return {
        deleteAccount: (navigate) => dispatch(deleteAccount(navigate)),
    };
};

export const deleteAccount = (navigate) => {
    console.log(`Delete Account action received`);
    return async (dispatch) => {
        console.log(`Delete Account action received`);

        const response = await api.deleteAccount();
        console.log(response);

        if (response.error) {
            dispatch(openAlertMessage(response?.exception?.response?.data, "danger"));
            console.log("error");
            console.log(response);
        } else {
            logout();
            dispatch(openAlertMessage("Successfully Deleted Account", "success"));
            navigate("/welcome");
        }
    };
};
