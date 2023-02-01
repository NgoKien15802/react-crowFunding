import React, { Fragment } from "react";
import Heading from "~/components/common/Heading";
import CampaignGrid from "~/modules/campaign/CampaignGrid";
import CampaignItem from "~/modules/campaign/CampaignItem";
import { v4 } from "uuid";
import CampaignFeauture from "~/modules/campaign/CampaignFeauture";
import Gap from "~/components/common/Gap";

const DashboardPage = () => {
    return (
        <Fragment>
            <Heading number={"4"}>Your campaign</Heading>
            <CampaignFeauture></CampaignFeauture>
            <Gap></Gap>
            <Heading>Popular campaign</Heading>
            <CampaignGrid>
                {Array(4)
                    .fill(0)
                    .map((item) => (
                        <CampaignItem key={v4()} data={item}></CampaignItem>
                    ))}
            </CampaignGrid>
            <Gap></Gap>
            <Heading>Recent Campaign</Heading>
        </Fragment>
    );
};

export default DashboardPage;
