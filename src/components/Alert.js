import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Alert from "@mui/material/Alert";
import { connect } from "react-redux";

const AlertNotif = ({ alerts }) =>
    alerts.map((alert) => (
        <Alert key={alert.id} severity={alert.alertType}>
            {alert.msg}
        </Alert>
    ));

AlertNotif.propTypes = {
    alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    alerts: state.alert,
});

export default connect(mapStateToProps)(AlertNotif);
