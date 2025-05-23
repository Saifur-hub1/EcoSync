import { CalendarCheck, LayoutDashboard, Pickaxe, Receipt, ScanFace, Settings, UserCog, Users } from "lucide-react";

const AdminSidebarItemList = [
    {
        Icon: LayoutDashboard,
        title: "Dashboard",
    },
    {
        Icon: CalendarCheck,
        title: "Schedules",
    },
    {
        Icon: ScanFace,
        title: "Roles"
    },
    {
        Icon: Users,
        title: "Users"
    },
    {
        Icon: Receipt,
        title: "Bill",
    },
    {
        Icon: UserCog,
        title: "Contracts",
    },
    {
        Icon: Pickaxe,
        title: "Workforce"
    },
    {
        Icon: Settings,
        title: "Settings"
    }
]

export default AdminSidebarItemList;