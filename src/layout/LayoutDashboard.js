import React from "react";
import { Outlet } from "react-router-dom";
import Overlay from "~/components/common/Overlay";
import DashboardSidebar from "~/modules/dashboard/DashboardSidebar";
import DashboardTopbar from "~/modules/dashboard/DashboardTopbar";

const LayoutDashboard = () => {
    return (
        <div className="p-10 bg-lite">
            <Overlay></Overlay>
            <DashboardTopbar></DashboardTopbar>
            <div className="flex items-start min-h-screen gap-x-10">
                <DashboardSidebar></DashboardSidebar>
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default LayoutDashboard;
