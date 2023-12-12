import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { UserNotificationTab } from "./UserNotificationTab";

export interface Notification {
  id: number;
  title: string;
  notification: string;
  date: Date;
}

const list: Notification[] = [
  {
    id: 0,
    title: "Compra realizada!",
    notification:
      "El estudiante Jhair realizo la compra",
    date: new Date("2023-11-01"),
  },
  {
    id: 1,
    title: "Compra no realizada!",
    notification:
      "El estudiante Jhair intento hacer la compra",
    date: new Date("2023-11-01"),
  },
  {
    id: 2,
    title: "Compra rechazada!",
    notification:
      "Realizaste el rechazo a un estudiante",
    date: new Date("2023-11-01"),
  },

];

export default function UserNotification() {
  const [listNotification, setListNotification] =
    useState<Notification[]>(list);
  const [archives, setArchives] = useState<Notification[]>([]);
  const [notificationOpen, setNotificationOpen] = useState<boolean>(false);

  const handleNotification = () => {
    setNotificationOpen(!notificationOpen);
  };

  const handleArchive = (id: number) => {
    const index = listNotification.findIndex((item) => item.id === id);

    if (index !== -1) {
      const newElements = [...listNotification];
      const elementArchived = newElements.splice(index, 1)[0];
      setListNotification(newElements);
      setArchives([elementArchived, ...archives]);
    }
  };

  const restoreListNotification = (id: number) => {
    const index = archives.findIndex((item) => item.id === id);

    if (index !== -1) {
      const newArchives = [...archives];
      const elementRestored = newArchives.splice(index, 1)[0];
      setArchives(newArchives);
      setListNotification([...listNotification, elementRestored]);
    }
  };

  const deleteListArchives = (id: number) => {
    const index = archives.findIndex((item) => item.id === id);
    if (index !== -1) {
      const newArchives = [...archives];
      newArchives.splice(index, 1)[0];
      setArchives(newArchives);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div
          className="relative p-1 rounded-full cursor-pointer"
          onClick={handleNotification}
        >
          {listNotification.length > 0 && (
            <span className="absolute right-0 top-0 mt-0 h-2 w-2 rounded-full bg-destructive"></span>
          )}
          <FontAwesomeIcon
            className="text-white"
            style={{ width: "19px", height: "19px" }}
            icon={faBell}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[300px] lg:relative lg:right-[50%] pt-2">
        <div className=" h-[300px] rounded-md">
          <div>
            <Tabs defaultValue="notificaciones" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-transparent">
                <TabsTrigger
                  value="notificaciones"
                  className="pb-3 rounded-none border-b-2 data-[state=active]:border-white"
                >
                  Notificaciones
                </TabsTrigger>
                <TabsTrigger
                  value="archivados"
                  className="pb-3 rounded-none border-b-2 data-[state=active]:border-white"
                >
                  Archivados
                </TabsTrigger>
              </TabsList>
              <UserNotificationTab
                list={listNotification}
                onArchive={handleArchive}
              />
              <UserNotificationTab
                list={archives}
                value="archivados"
                onRestore={restoreListNotification}
                onDelete={deleteListArchives}
              />
            </Tabs>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
