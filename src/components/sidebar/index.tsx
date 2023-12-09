import { MENU_ITEMS } from "@/constants";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/Tooltip";
import { Button } from "../ui/button";
import { ArrowRightLeft } from "lucide-react";
import { SidebarItem } from "./SidebarItem";

interface NavbarProps {
  isExpanded: boolean;
}

export function Sidebar({ isExpanded}: NavbarProps) {
  return (
    <>
      <nav className="pt-6">
        {MENU_ITEMS.map((data, index) => (
          <SidebarItem key={index} {...data} isExpanded={isExpanded} />
        ))}
        <TooltipProvider delayDuration={10}>
          <Tooltip>
            <TooltipContent>
              {isExpanded ? <span>Cerrar</span> : <span>Abrir</span>}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </>
  );
}