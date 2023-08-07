import React from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { connect, useSelector } from "react-redux";
import { getActions } from "../../store/actions/alertActions";

const AlertNotification = ({ closeAlertMessage }) => {
    const alert = useSelector((state) => state.alertReducer.alert);
    // console.log(
    //     "______________________________________________________________"
    // );
    // console.log("alert from compoentn is ", alert);
    // console.log(
    //     "______________________________________________________________"
    // );

    return (
        <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={alert.showAlertMessage}
            onClose={closeAlertMessage}
            autoHideDuration={3000}
        >
            <Alert severity={alert.alertSeverity} variant="filled">
                {alert.alertMessageContent}
            </Alert>
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
