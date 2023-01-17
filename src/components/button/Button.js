import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, type = "button", className }) => {
    return (
        <button
            className={`flex justify-center p-4 text-white text-base font-semibold rounded-xl ${className}`}
            type={type}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
};

export default Button;
