import React from "react";
import "../scss/components/LabelInput.scss";

const LabelInput = ({ label, type, value, handleChange }) => {
    return (
        <div className={`label-input ${value ? "has-value" : ""}`}>
            <input type={type} value={value} onChange={handleChange} autoComplete="off" />
            <div>{label}</div>
        </div>
    );
}

export default LabelInput;