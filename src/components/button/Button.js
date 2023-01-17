import React from "react";
import PropTypes from "prop-types";

const Button = ({
    children,
    type = "button",
    className,
    isLoading = false,
    ...props
}) => {
    const child = !!isLoading ? (
        <div className="w-10 h-10 border-4 rounded-full border-t-transparent animate-spin border-b-transparent"></div>
    ) : (
        children
    );
    return (
        <button
            className={`flex justify-center min-h-[56px] p-4 text-white text-base font-semibold rounded-xl ${className} ${
                !!isLoading ? "opacity-50 pointer-events-none" : ""
            }`}
            type={type}
            {...props}
        >
            {child}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
    isLoading: PropTypes.bool,
};

export default Button;
