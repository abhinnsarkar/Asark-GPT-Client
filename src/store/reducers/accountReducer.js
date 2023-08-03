import { logout } from "../../shared/utils/logout";
import { LOGOUT, ACCOUNT_DELETED } from "../actions/types";

const initState = {
    accountDeleted: false,
};

const accountReducer = (state = initState, action) => {
    switch (action.type) {
        case ACCOUNT_DELETED:
        case LOGOUT:
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            logout();
            return {
                initState,
            };
        default:
            return state;
    }
};

export default accountReducer;
