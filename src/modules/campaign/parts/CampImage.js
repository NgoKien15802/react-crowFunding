import React from "react";
import { defaultImage } from "~/constants/global";

const CampImage = ({ className = "h-[158px]", image = defaultImage }) => {
    return (
        <div className={className}>
            <img
                className="object-cover w-full h-full rounded-2xl"
                src={image}
                alt=""
            />
        </div>
    );
};

export default CampImage;
