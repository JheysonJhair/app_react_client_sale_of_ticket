import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/sidebar";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Toaster } from "@/components/ui/toaster";
import { UserDropdownMenu } from "@/components/UserDropdownMenu";
import { LogoIcon, LogoIconExpanded } from "@/components/icons";
import UserNotification from "@/components/UserNotification";
import { CommandMenu } from "@/components/CommandMenu";
import { Breadcrumb } from "@/components/Breadcrumb";

function AppLayout() {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="bg-background h-16 relative border-b-2 z-50">
        <div className="h-full flex items-center justify-end p-6 gap-16 ">
          <div
            className={`flex gap-16 justify-between w-full items-center pl-[15rem]`}
          >
            <Breadcrumb />
            <CommandMenu />

            <div className="flex gap-16">
              <UserNotification />
              <UserDropdownMenu />
            </div>
          </div>
        </div>
        <div
          className={`w-[15.4rem] duration-200 bg-background h-screen absolute top-0 border-r flex flex-col justify-center`}
        >
          <div className={`mx-auto pt-4 pl-6`}>
            <LogoIcon className="w-[3rem] h-16 origin-left duration-200 scale-100 mx-auto" />
          </div>
          <div className="grow">
            <Sidebar isExpanded={true} />
          </div>
        </div>
      </div>
      <div
        className={` transition-all duration-200 relative ml-10 xl:ml-0 pl-[17rem] pr-[2rem]`}
      >
        <Outlet />
      </div>
      <Toaster />
      <TailwindIndicator />
    </div>
  );
}

export default AppLayout;
