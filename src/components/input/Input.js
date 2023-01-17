import React from "react";
import { useController } from "react-hook-form";
import PropsType from "prop-types";

const Input = ({
    control,
    type = "text",
    name,
    error = "",
    placeholder = "",
    ...props
}) => {
    const { field } = useController({
        control,
        name,
        defaultValue: "",
    });
    return (
        <div className="relative ">
            <input
                id={name}
                type={type}
                className={`w-full px-6 py-4 text-sm font-medium border border-strock rounded-xl text-text1 placeholder:text-text4 ${
                    error.length > 0 ? "border-error" : ""
                }`}
                placeholder={error.length < 0 ? placeholder : ""}
                {...field}
                {...props}
            />
            {error.length > 0 && (
                <span className="absolute text-sm font-medium pointer-events-none text-error top-2/4 -translate-y-2/4 left-6 error-input">
                    {error}
                </span>
            )}
        </div>
    );
};

Input.propsType = {
    name: PropsType.string,
    type: PropsType.string,
    control: PropsType.any.isRequired,
    error: PropsType.string,
};

export default Input;
