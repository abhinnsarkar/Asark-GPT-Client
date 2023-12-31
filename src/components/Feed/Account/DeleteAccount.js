import React from "react";
import { AccountButton } from "./AccountButton";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import DeleteAccountModal from "./DeleteAccountModal";

export const DeleteAccount = ({ isLaptop, isPortrait }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <AccountButton
                title="Delete My Account"
                fn={handleOpen}
                icon={<PersonRemoveIcon />}
                isLaptop={isLaptop}
                isPortrait={isPortrait}
            />
            <DeleteAccountModal
                isLaptop={isLaptop}
                isPortrait={isPortrait}
                open={open}
                handleClose={handleClose}
            />
        </>
    );
};
