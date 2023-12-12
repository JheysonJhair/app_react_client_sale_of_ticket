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
    <div className="w-full h-screen flex flex-col">
      <div className="bg-background h-16 relative border-b-2 z-50">
        <div className="h-full flex items-center justify-end p-6 gap-16 ">
          <div
            className={`flex gap-16 justify-between w-full items-center pl-[15rem]`}
          >
            <Breadcrumb />
            <CommandMenu />

            <div className="flex gap-6">
              <UserNotification />
              <UserDropdownMenu />
            </div>
          </div>
        </div>
        <div
          className={`w-[15.4rem] duration-200 bg-background h-screen absolute top-0 border-r flex flex-col justify-center`}
        >
          <div className="flex flex-col items-center mt-4 gap-3">
            <img
              src="https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcmZpbCUyMGRlJTIwaG9tYnJlfGVufDB8fDB8fHww"
              alt="perfil"
              className="rounded-full w-16 h-16 md:w-28 md:h-28 lg:w-44 lg:h-44 flex-initial object-cover"
            />
            <div className="text-center">
              <p className="font-bold text-1xl mr-3 ml-3">
                ADMINISTRADOR
              </p>
            </div>
          </div>
          <hr className="w-5/6 mx-auto my-4" />

          <div className="grow">
            <Sidebar />
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
