import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../common/ErrorComponent";

const ButtonGoogle = ({ text = "Sign up with google", onClick = () => {} }) => {
    return (
        <button className="flex items-center justify-center w-full py-4 mb-5 text-base font-semibold border text-text2 border-strock dark:border-darkStroke rounded-xl dark:text-white gap-x-2">
            <img
                src="/google.png"
                alt="google"
                className=""
                onClick={onClick}
            />
            <span>{text}</span>
        </button>
    );
};

ButtonGoogle.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default withErrorBoundary(ButtonGoogle, {
    FallbackComponent: ErrorComponent,
});
