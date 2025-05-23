import { LucideIcon } from "lucide-react";

interface SidebarItemType {
    Icon: LucideIcon,
    title: string,
    active?: boolean
    onclick: () => void
}

const SidebarItem = ({ Icon, title, active = true, onclick }: SidebarItemType) => {
    return (
        <div
            onClick={onclick}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 hover:text-primary cursor-pointer ${active && ("bg-gray-400")}`}
        >
            {Icon && <Icon className="h-4 w-4"/>}
            {title}
        </div>
    );
}

export default SidebarItem;
