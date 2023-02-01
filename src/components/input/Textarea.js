import React from "react";
import { useController } from "react-hook-form";
import classNames from "~/utils/classNames";

const Textarea = ({ control, name, placeholder = "", children, ...props }) => {
    const { field } = useController({
        control,
        name,
        defaultValue: "",
    });
    return (
        <textarea
            placeholder={placeholder}
            className={classNames(
                "w-full px-6 py-4 text-sm font-medium border resize-none min-h-[140px] outline-none border-strock bg-transparent rounded-xl text-text1 dark:text-white dark:placeholder:text-text2  placeholder:text-text4"
            )}
            {...props}
            {...field}
        ></textarea>
    );
};

export default Textarea;
