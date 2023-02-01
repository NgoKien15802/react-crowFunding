import React, { Fragment } from "react";
import LayoutDashboard from "~/layout/LayoutDashboard";
import CampaignAddNew from "~/modules/campaign/CampaignAddNew";

const StartCampaignPage = () => {
    return (
        <Fragment>
            <CampaignAddNew></CampaignAddNew>
        </Fragment>
    );
};

export default StartCampaignPage;
