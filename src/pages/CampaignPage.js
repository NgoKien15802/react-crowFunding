import React from "react";
import { Button } from "~/components/button";

import Heading from "~/components/common/Heading";
import LayoutDashboard from "~/layout/LayoutDashboard";
import CampaignFeauture from "~/modules/campaign/CampaignFeauture";
import CampaignGrid from "~/modules/campaign/CampaignGrid";

const CampaignPage = () => {
    return (
        <LayoutDashboard>
            <div className="flex items-center justify-between px-10 py-8 mb-10 bg-white rounded-3xl">
                <div className="flex items-start gap-x-6">
                    <div className="flex items-center justify-center text-white rounded-full bg-secondary bg-opacity-60 w-14 h-14">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="flex-1">
                        <h1 className="text-[22px] font-semibold mb-2">
                            Create Your Campaign
                        </h1>
                        <p className="mb-2 text-sm text-text3">
                            Jump right into our editor and create your first
                            Virtue campaign!
                        </p>
                        <a href="/" className="text-sm text-primary">
                            Need any help? Learn More...
                        </a>
                    </div>
                </div>
                <Button className="!text-secondary bg-secondary bg-opacity-20">
                    Create campaign
                </Button>
            </div>
            <Heading number={"4"}>Your Campaign </Heading>
            <CampaignGrid type="secondary">
                <CampaignFeauture></CampaignFeauture>
                <CampaignFeauture></CampaignFeauture>
                <CampaignFeauture></CampaignFeauture>
            </CampaignGrid>
        </LayoutDashboard>
    );
};

export default CampaignPage;
