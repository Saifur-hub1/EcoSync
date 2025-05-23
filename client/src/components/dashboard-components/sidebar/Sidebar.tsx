import { getSidebarElements, SidebarElement } from "@/data/sidebarElements/getSidebarByRole";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import SidebarItem from "./SidebarItem";
import { useContext } from "react";
import { NavContext } from "@/hooks/contexts/useNavCtx";
import { setCookie } from "@/lib/cookieFunction";
import { currActive } from "@/data/cookieName";

const Sidebar = ({ role }: { role: string }) => {
    const { currentActive, setCurrentActive } = useContext(NavContext);
    const SidebarItemList = getSidebarElements(role);
    return (
        <div>
            <SidebarHeader role={role} />
            <nav>
                {SidebarItemList.map((item: SidebarElement, index: number) => (
                    <SidebarItem
                        Icon={item.Icon}
                        title={item.title}
                        key={index}
                        active={currentActive.endsWith(item.title)}
                        onclick={()=>{
                            setCookie(currActive, role + '-' + item.title, 0.2);
                            setCurrentActive(role + '-' + item.title);
                        }}
                    />
                ))}
            </nav>
            <SidebarFooter />
        </div>
    );
}

export default Sidebar;
