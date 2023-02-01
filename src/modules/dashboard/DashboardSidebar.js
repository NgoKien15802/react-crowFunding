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
        url: "/logout",
        onclick: () => {},
    },
    {
        icon: <IconDarkMode></IconDarkMode>,
        title: "Light/Dark",
        url: "/lightDark",
        onclick: () => {},
    },
];

const DashboardSidebar = () => {
    const navLinkClass =
        "flex items-center last:bg-white last:shadow-sdPrimary last:mt-auto  md:mb-8 gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-3xl ";
    return (
        <div className="flex-shrink-0 px-[14px] py-10 flex flex-col w-full md:w-[76px] rou rounded-lg bg-white shadow-sdPrimary">
            {sidebarLinks.map((link) => (
                <NavLink
                    to={link.url}
                    key={link.title}
                    className={({ isActive }) =>
                        isActive
                            ? `${navLinkClass} text-primary bg-primary bg-opacity-20`
                            : `${navLinkClass} text-icon-color`
                    }
                >
                    {link.icon}
                    <span className="md:hidden">{link.title}</span>
                </NavLink>
            ))}
        </div>
    );
};

export default DashboardSidebar;
