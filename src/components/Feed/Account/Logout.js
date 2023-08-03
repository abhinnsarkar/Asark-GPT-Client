import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../../../shared/utils/logout";
import { AccountButton } from "./AccountButton";

export const Logout = () => {
    return <AccountButton title="Logout" fn={logout} icon={<LogoutIcon />} />;
};
