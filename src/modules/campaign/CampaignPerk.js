import React from "react";
import { defaultImage } from "~/constants/global";
import CampTitle from "./parts/CampTitle";

const CampaignPerk = () => {
    return (
        <div className="bg-white shadow-1 rounded-xl">
            <img
                src={defaultImage}
                className="h-[232px] object-cover rounded-xl w-full"
                alt=""
            />
            <div className="p-5">
                <span className="inline-block text-wh bg-secondary text-white py-1 px-3 font-medium rounded-sm mb-5">
                    Featured
                </span>
                <CampTitle className="text-xl mb-1 font-semibold">
                    Special One Camera
                </CampTitle>
                <div className="flex items-center  gap-x-3 mb-4">
                    <span className="text-text1 text-xl font-bold">
                        $2,724 USD
                    </span>
                    <span className="text-sm text-error line-through font-medium">
                        $1,504 USD
                    </span>
                    <span className="text-sm text-error  font-medium">
                        (12% OFF)
                    </span>
                </div>
                <div className="flex flex-col gap-y-1 clear-left mb-4">
                    <strong>Estimated Shipping</strong>
                    <span className="text-text2">October 2022</span>
                </div>
                <p className="text-text2 mb-4">
                    <strong className="text-text1">05</strong> claimed
                </p>
                <p className="text-text2">Ships worldwide</p>
            </div>
        </div>
    );
};

export default CampaignPerk;
