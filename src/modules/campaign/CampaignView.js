import React, { Fragment } from "react";
import { Button } from "~/components/button";
import { defaultImage } from "~/constants/global";
import CampCategory from "./parts/CampCategory";
import CampDesc from "./parts/CampDesc";
import CampImage from "./parts/CampImage";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";
import CampViewAuthor from "./parts/CampViewAuthor";

const CampaignView = () => {
    return (
        <Fragment>
            <div
                className="mb-10 h-[140px] text-[40px] font-bold rounded-3xl bg-no-repeat object-cover bg-center  flex items-center justify-center text-white"
                style={{
                    backgroundImage: `linear-gradient(179.14deg,rgba(32, 18, 63, 0) -7.14%,rgba(0,0,0,0.5) 87.01%),url(/PlaceHolder.png)`,
                }}
            >
                <h1> Education</h1>
            </div>
            <div className="flex items-start gap-x-[40px] w-full max-w-[1066px]">
                <div className="flex-1">
                    <CampImage className="h-[398px] mb-8"></CampImage>
                    <div className="flex justify-center gap-x-5">
                        {Array(4)
                            .fill(0)
                            .map((item, index) => (
                                <img
                                    src={defaultImage}
                                    alt=""
                                    className="w-[89px] h-[70px] rounded-lg object-cover"
                                />
                            ))}
                    </div>
                </div>
                <div className="max-w-[443px]">
                    <CampCategory
                        text="Architecture"
                        className="text-sm"
                    ></CampCategory>
                    <CampTitle className="mb-4 text-xl font-bold">
                        Remake - We Make architecture exhibition
                    </CampTitle>
                    <CampDesc className="mb-6 text-sm">
                        Remake - We Make: an exhibition about architecture's
                        social agency in the face of urbanisation
                    </CampDesc>
                    <CampViewAuthor></CampViewAuthor>
                    <div className="w-full h-1 rounded-full bg-[#efefef] mb-6">
                        <div className="w-2/4 h-full rounded-full bg-primary"></div>
                    </div>
                    <div className="flex items-start justify-between mb-4 gap-x-5">
                        <CampMeta size="big"></CampMeta>
                        <CampMeta size="big"></CampMeta>
                        <CampMeta size="big"></CampMeta>
                    </div>
                    <Button kind="primary" className="w-full">
                        Back this project
                    </Button>
                </div>
            </div>
        </Fragment>
    );
};

export default CampaignView;
