import React, { Fragment } from "react";
import { Button } from "~/components/button";
import { defaultImage } from "~/constants/global";
import CampaignGrid from "./CampaignGrid";
import CampaignItem from "./CampaignItem";
import CampaignPerk from "./CampaignPerk";
import CampaignSupport from "./CampaignSupport";
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
            <div className="flex items-start gap-x-[40px] w-full max-w-[1066px] ">
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

            <div className="flex items-center justify-between mt-[100px] mb-6 p-5 shadow-sm border-b border-b-slate-100">
                <div className="flex items-center font-medium gap-x-14 text-text3">
                    <span className="cursor-pointer text-secondary">
                        Campaign
                    </span>
                </div>
                <Button className="text-right" kind="primary">
                    Back this project
                </Button>
            </div>
            <div className="grid gap-x-[124px] grid-cols-[1.3fr,1fr] mb-[70px]">
                <div>
                    <h2 className="text-lg mb-5 font-semibold uppercase">
                        Story
                    </h2>
                    <div className="bg-white w-full"></div>
                </div>
                <div>
                    <CampaignSupport></CampaignSupport>
                    <div className="mb-[60px]"></div>
                    <div className="flex flex-col gap-y-[30px]">
                        <CampaignPerk></CampaignPerk>
                        <CampaignPerk></CampaignPerk>
                        <CampaignPerk></CampaignPerk>
                    </div>
                </div>
            </div>
            <h2 className="mb-10 text-xl font-semibold">
                You also may be interested in
            </h2>
            <CampaignGrid>
                <CampaignItem></CampaignItem>
                <CampaignItem></CampaignItem>
                <CampaignItem></CampaignItem>
                <CampaignItem></CampaignItem>
            </CampaignGrid>
        </Fragment>
    );
};

export default CampaignView;
