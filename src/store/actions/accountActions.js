import * as api from "../../api";
import { logout } from "../../shared/utils/logout";

import { openAlertMessage } from "./alertActions";

export const getAccountActions = (dispatch) => {
    return {
        deleteAccount: (navigate) => dispatch(deleteAccount(navigate)),
    };
};

export const deleteAccount = (navigate) => {
    console.log(`Delete Account action received`);
    return async (dispatch) => {
        const response = await api.deleteAccount();
        console.log("response frin dkete", response);

        if (response.error) {
            dispatch(
                openAlertMessage(
                    response?.exception?.response?.data.msg,
                    "danger"
                )
            );
            console.log("error");
            console.log(response);
        } else {
            console.log("logging out");
            logout();
            dispatch(
                openAlertMessage("Successfully Deleted Account", "success")
            );
            navigate("/welcome");
        }
    };
};
