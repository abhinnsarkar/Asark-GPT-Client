import alertActions from "../actions/alertActions";

// const initState = {
//     showAlertMessage: false,
//     alertMessageContent: null,
// };
const initState = {
    alert: {},
};

const alertReducer = (state = initState, action) => {
    switch (action.type) {
        case alertActions.OPEN_ALERT_MESSAGE:
            return {
                ...state,
                alert: {
                    showAlertMessage: true,
                    alertMessageContent: action.content,
                    severity: action.severity,
                },
            };
        case alertActions.CLOSE_ALERT_MESSAGE:
            // return {
            //     ...state,
            //     showAlertMessage: false,
            //     alertMessageContent: null,
            //     severity: null,
            // };
            return {
                ...state,
                alert: {},
            };
        default:
            return state;
    }
};

export default alertReducer;
