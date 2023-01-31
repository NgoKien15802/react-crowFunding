import React from "react";
import { NavLink } from "react-router-dom";
import {
    IconCampaign,
    IconDarkMode,
    IconDashboard,
    IconLogout,
    IconPayment,
    IconProfile,
    IconWithDraw,
} from "~/components/icons";

const sidebarLinks = [
    {
        icon: <IconDashboard></IconDashboard>,
        title: "Dashboard",
        url: "/",
    },
    {
        icon: <IconCampaign></IconCampaign>,
        title: "Campaign",
        url: "/campaign",
    },
    {
        icon: <IconPayment></IconPayment>,
        title: "Payment",
        url: "/payment",
    },
    {
        icon: <IconWithDraw></IconWithDraw>,
        title: "WithDraw",
        url: "/withDraw",
    },
    {
        icon: <IconProfile></IconProfile>,
        title: "Profile",
        url: "/profile",
    },
    {
        icon: <IconLogout></IconLogout>,
        title: "Logout",
        url: "/#",
        onclick: () => {},
    },
    {
        icon: <IconDarkMode></IconDarkMode>,
        title: "Light/Dark",
        url: "#",
        onclick: () => {},
    },
];

const DashboardSidebar = () => {
    return (
        <div className="flex-shrink-0 px-[14px] py-10 flex flex-col w-full md:w-[76px] rou rounded-lg bg-white shadow-sdPrimary">
            {sidebarLinks.map((link) => (
                <NavLink
                    to={link.url}
                    key={link.title}
                    className={`flex items-center last:bg-white last:shadow-sdPrimary last:mt-auto text-icon-color md:mb-8 gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-3xl  ({ isActive }) =>
                            isActive
                                ? "bg-primary text-primary bg-opacity-20"
                                : ""`}
                >
                    <span className="">{link.icon}</span>{" "}
                    <span className="md:hidden">{link.title}</span>
                </NavLink>
            ))}
        </div>
    );
};

export default DashboardSidebar;
