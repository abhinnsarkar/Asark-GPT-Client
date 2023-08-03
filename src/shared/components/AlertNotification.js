import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/alertActions";
import store from "../../store/store";

const AlertNotification = ({
    showAlertMessage,
    closeAlertMessage,
    alertMessageContent,
    alertSeverity,
}) => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={showAlertMessage}
            onClose={closeAlertMessage}
            autoHideDuration={3000}
        >
            <Alert severity={alertSeverity}>{alertMessageContent}</Alert>
        </Snackbar>
    );
};

const mapStoreStateToProps = ({ alert }) => {
    return {
        ...alert,
    };
};

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    };
};

export default connect(
    mapStoreStateToProps,
    mapActionsToProps
)(AlertNotification);
