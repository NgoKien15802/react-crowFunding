import React from "react";
import LayoutDashboard from "~/layout/LayoutDashboard";
import CampaignAddNew from "~/modules/campaign/CampaignAddNew";

const StartCampaignPage = () => {
    return (
        <LayoutDashboard>
            <CampaignAddNew></CampaignAddNew>
        </LayoutDashboard>
    );
};

export default StartCampaignPage;
