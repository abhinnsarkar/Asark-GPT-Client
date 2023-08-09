import { OPEN_ALERT_MESSAGE, CLOSE_ALERT_MESSAGE } from "../actions/types";

const initState = {
    alert: {},
};

const alertReducer = (state = initState, action) => {
    switch (action.type) {
        case OPEN_ALERT_MESSAGE:
            console.log(action);
            return {
                ...state,
                alert: {
                    visible: true,
                    content: action.content,
                    severity: action.severity,
                },
            };
        case CLOSE_ALERT_MESSAGE:
            return {
                // ...state,
                // alert: {},
                initState,
            };
        default:
            return state;
    }
};

export default alertReducer;
