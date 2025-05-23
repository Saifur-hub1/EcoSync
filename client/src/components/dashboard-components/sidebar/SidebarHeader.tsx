import { role } from "@/data/cookieName";
import { admin, landfillManager, stsManager } from "@/data/role";
import { getCookie } from "@/lib/cookieFunction";
import { useState } from "react";

function getTitle(role: string) {
    switch (role) {
        case admin:
            return "Admin Dashboard";
        case landfillManager:
            return "Landfill Manager Dashboard";
        case stsManager:
            return "STS Manager Dashboard";
        default:
            return "EcoSync";
    }
}

const SidebarHeader = ({ role }: { role: string }) => {
    return (
        <div className="flex h-20 items-center border-b px-4 lg:h-[80px] lg:px-6">
            <a href="/" className="flex items-center gap-2 font-semibold">
                <img
                    src="/ecoSync.png"
                    alt="EcoSync logo"
                    className="h-16 w-16 ml-2 mr-2"
                />
                <span>{getTitle(role)}</span>
            </a>
        </div>
    );
}

export default SidebarHeader;
