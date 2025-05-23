import { LucideIcon } from "lucide-react";
import { admin, contractorManager, landfillManager, stsManager } from "../role";
import AdminSidebarItemList from "./adminSidebar";
import contractorManagerSidebarItemList from "./contractorManagerSidebar";
import LandfillManagerSiderbarItemList from "./landfillManagerSidebar";
import stsManagerSidebarItemList from "./stsManagerSidebar";

export interface SidebarElement {
    Icon: LucideIcon,
    title: string
}

const getSidebarElements = (role: string): SidebarElement[] => {
    switch (role) {
        case admin:
            return AdminSidebarItemList
        case landfillManager:
            return LandfillManagerSiderbarItemList
        case stsManager:
            return stsManagerSidebarItemList
        case contractorManager:
            return contractorManagerSidebarItemList
        default:
            return []
    }
}

export { getSidebarElements };