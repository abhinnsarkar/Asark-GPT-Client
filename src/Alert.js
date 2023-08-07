import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import store from "./store/store";

const Alert = ({ alerts }) => {
    console.log("store", store.getState());
    console.log(alerts);
    console.log(typeof alerts);
    if (typeof alerts === "object") {
        console.log(
            "_______________________________________________________________________________________________________________________"
        );
        console.log("entered if");
        console.log(
            "_______________________________________________________________________________________________________________________"
        );
        // alerts.map((alert) => (
        //   <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        //     {alert.msg}
        //   </div>
        // ));
        alerts.forEach((alert) => {
            return (
                <div
                    key={alert.id}
                    className={`alert alert-${alert.alertType}`}
                >
                    {alert.msg}
                </div>
            );
        });
    }
};
// const Alert = ({ alerts }) =>
//     alerts.map((alert) => (
//         <div key={alert.id} className={`alert alert-${alert.alertType}`}>
//             {alert.msg}
//         </div>
//     ));
Alert.propTypes = {
    alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
