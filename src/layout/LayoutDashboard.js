import React from "react";
import DashboardSidebar from "~/modules/dashboard/DashboardSidebar";
import DashboardTopbar from "~/modules/dashboard/DashboardTopbar";

const LayoutDashboard = ({ children }) => {
    return (
        <div className="p-10 bg-lite">
            <DashboardTopbar></DashboardTopbar>
            <div>
                <DashboardSidebar></DashboardSidebar>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default LayoutDashboard;
