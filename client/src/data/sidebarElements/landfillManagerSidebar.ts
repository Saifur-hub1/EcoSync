import { CalendarCheck, Database, LayoutDashboard, Receipt, Settings, Truck } from "lucide-react";

const LandfillManagerSiderbarItemList = [
    {
        Icon: LayoutDashboard,
        title: "Dashboard",
    },
    {
        Icon: CalendarCheck,
        title: "Schedules"
    },
    {
        Icon: Database,
        title: "Storage"
    },
    {
        Icon: Truck,
        title: "Dump Entry"
    },
    {
        Icon: Receipt,
        title: "Bills"
    },
    {
        Icon: Settings,
        title: "Settings"
    }
]

export default LandfillManagerSiderbarItemList;