import SidebarButton from "./SidebarButton";
import SidebarButtonSm from "./SidebarButtonSm";

export default function Sidebar() {
    return <div className="col-span-1 xl:col-span-2 pe-10">
        <SidebarButton/>
        <SidebarButtonSm/>
    </div>
}