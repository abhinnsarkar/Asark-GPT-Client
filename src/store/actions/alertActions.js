const alertActions = {
    OPEN_ALERT_MESSAGE: "ALERT.OPEN_ALERT_MESSAGE",
    CLOSE_ALERT_MESSAGE: "ALERT.CLOSE_ALERT_MESSAGE",
};

export const getActions = (dispatch) => {
    return {
        openAlertMessage: (content, severity) =>
            dispatch(openAlertMessage(content, severity)),
        closeAlertMessage: () => dispatch(closeAlertMessage()),
    };
};

export const openAlertMessage = (content, severity) => {
    return {
        type: alertActions.OPEN_ALERT_MESSAGE,
        content,
        severity,
    };
};

export const closeAlertMessage = () => {
    return {
        type: alertActions.CLOSE_ALERT_MESSAGE,
    };
};

export default alertActions;
