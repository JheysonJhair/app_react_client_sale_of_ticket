import { MENU_ITEMS } from "@/constants";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
  return (
    <>
      <nav>
        {MENU_ITEMS.map((data, index) => (
          <SidebarItem key={index} {...data} />
        ))}
      </nav>
    </>
  );
}