import React from "react";
import "../scss/components/Toast.scss";

const Toast = ({ message, type, visible }) => {
    return (
        <div className={`${"toast"} ${visible ? "show" : "hide"} ${type}`}>{message}</div>
    );
}

export default Toast;