import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

interface Props {
  name?: string;
  url: string;
  icon: any;
}

export function SidebarItem({ name, url, icon }: Props) {
  const [isHover, setIsHover] = useState(false);
  const location = useLocation();
  const isActive = location.pathname.split("/")[1] === url.split("/")[1];

  return (
    <NavLink
      to={url}
      className={`group flex relative w-[12rem] ml-4 origin-left transition-all duration-75" h-[3.8rem] mx-auto`}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <div
        className={`${
          isActive && "bg-primary text-white"
        } p-2 w-full group-hover:bg-primary group-hover:text-white rounded transition-all duration-75 origin-left mt-5 flex gap-5 ${
          isActive  && "bg-primary origin-left text-white"
        }`}
      >
        <span>{icon}</span>
        <span className={` origin-left`}>
          {name}
        </span>
      </div>
      {isHover && false && (
        <p className=" absolute top-3 bg-muted border left-[3.8rem] w-36 h-full flex items-center pl-2 text-[1.2rem] rounded-r-xl">
          {name}
        </p>
      )}
    </NavLink>
  );
}
