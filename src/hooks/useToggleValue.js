import { useState } from "react";

export default function useToggleValue(initValue = false) {
    const [value, setValue] = useState(initValue);
    const handleToggleValue = () => {
        setValue(!value);
    };

    return {
        value,
        handleToggleValue,
    };
}
