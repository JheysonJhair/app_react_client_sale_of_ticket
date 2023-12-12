import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/sidebar";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Toaster } from "@/components/ui/toaster";
import { UserDropdownMenu } from "@/components/UserDropdownMenu";
import UserNotification from "@/components/UserNotification";
import { CommandMenu } from "@/components/CommandMenu";
import { Breadcrumb } from "@/components/Breadcrumb";

function AppLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Barra lateral */}
      <div className={`w-[15.4rem] bg-background border-r`}>
        <div className="flex flex-col items-center mt-4 gap-3">
          <img
            src="https://png.pngtree.com/png-vector/20210317/ourlarge/pngtree-astronauta-vector-png-image_3065419.jpg"
            alt="perfil"
            className="rounded-full w-16 h-16 md:w-28 md:h-28 lg:w-44 lg:h-44 flex-initial object-cover"
          />
          <div className="text-center">
            <p className="font-bold text-1xl mr-3 ml-3">ADMINISTRADOR</p>
          </div>
        </div>
        <hr className="w-5/6 mx-auto my-4" />

        <div className="grow">
          <Sidebar />
        </div>
      </div>

      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="bg-background h-16 relative border-b-2 z-50">
          <div className="h-full flex items-center justify-end p-6 gap-16">
            <div
              className={`flex gap-16 justify-between w-full items-center`}
            >
              <Breadcrumb />
              <CommandMenu />

              <div className="flex gap-6">
                <UserNotification />
                <UserDropdownMenu />
              </div>
            </div>
          </div>
        </div>

        <div className="transition-all duration-200 relative ml-10 xl:ml-0 pl-[2rem] pr-[2rem] overflow-y-auto">
          <Outlet />
        </div>
      </div>
      <Toaster />
      <TailwindIndicator />
    </div>
  );
}

export default AppLayout;