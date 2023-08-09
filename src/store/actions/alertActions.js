import { OPEN_ALERT_MESSAGE, CLOSE_ALERT_MESSAGE } from "./types";

export const getAlertActions = (dispatch) => {
    return {
        openAlertMessage: (content) => dispatch(openAlertMessage(content)),
        closeAlertMessage: () => dispatch(closeAlertMessage()),
    };
};

export const openAlertMessage = (content, severity) => {
    return {
        type: OPEN_ALERT_MESSAGE,
        content,
        severity,
    };
};

export const closeAlertMessage = () => {
    return {
        type: CLOSE_ALERT_MESSAGE,
    };
};
