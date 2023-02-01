import React from "react";
import CampCategory from "./parts/CampCategory";
import CampDesc from "./parts/CampDesc";
import CampImage from "./parts/CampImage";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";

const CampaignFeauture = () => {
    return (
        <div className="flex items-center gap-x-[30px] w-full max-w-[1048px]">
            <CampImage className="h-[266px] flex-1"></CampImage>
            <div className="max-w-[435px]">
                <CampCategory
                    text="Architecture"
                    className="text-sm"
                ></CampCategory>
                <CampTitle className="mb-4 text-xl font-bold">
                    Remake - We Make architecture exhibition
                </CampTitle>
                <CampDesc className="mb-6 text-sm">
                    Remake - We Make: an exhibition about architecture's social
                    agency in the face of urbanisation
                </CampDesc>
                <div className="w-full h-1 rounded-full bg-[#efefef] mb-6">
                    <div className="w-2/4 h-full rounded-full bg-primary"></div>
                </div>
                <div className="flex items-start justify-between gap-x-5">
                    <CampMeta size="big"></CampMeta>
                    <CampMeta size="big"></CampMeta>
                    <CampMeta size="big"></CampMeta>
                </div>
            </div>
        </div>
    );
};

export default CampaignFeauture;
