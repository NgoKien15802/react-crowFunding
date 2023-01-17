import React from "react";
import { useController } from "react-hook-form";
import PropsType from "prop-types";

const Input = ({ control, type = "text", name, ...props }) => {
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
                className="w-full px-6 py-4 text-sm font-medium border border-strock rounded-xl text-text1 placeholder:text-text4"
                {...field}
                {...props}
            />
        </div>
    );
};

Input.propsType = {
    name: PropsType.string,
    type: PropsType.string,
    control: PropsType.any.isRequired,
};

export default Input;
