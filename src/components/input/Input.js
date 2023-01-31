import React from "react";
import { useController } from "react-hook-form";
import PropsType from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../common/ErrorComponent";
import classNames from "~/utils/classNames";

const Input = ({
    control,
    type = "text",
    name,
    error = "",
    placeholder = "",
    children,
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
                className={classNames(
                    "w-full px-6 py-4 text-sm font-medium border border-strock bg-transparent rounded-xl text-text1 dark:text-white dark:placeholder:text-text2  placeholder:text-text4",
                    error.length > 0
                        ? "border-error text-error"
                        : "dark:border-darkStroke border-strock text-text1",
                    children ? "pr-16" : ""
                )}
                placeholder={error.length <= 0 ? placeholder : ""}
                {...field}
                {...props}
            />
            {error.length > 0 && (
                <span className="absolute text-sm font-medium pointer-events-none text-error top-2/4 -translate-y-2/4 left-6 error-input">
                    {error}
                </span>
            )}
            {children && (
                <span className="absolute cursor-pointer select-none right-6 top-2/4 -translate-y-2/4">
                    {children}
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

export default withErrorBoundary(Input, {
    FallbackComponent: <ErrorComponent></ErrorComponent>,
});
