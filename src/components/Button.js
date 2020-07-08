import React from "react";
import "../scss/components/Button.scss";

const Button = ({ label, handleClick }) => {
    return (
        <div className="button" onClick={handleClick}>
            {label}
        </div>
    );
}

export default Button;