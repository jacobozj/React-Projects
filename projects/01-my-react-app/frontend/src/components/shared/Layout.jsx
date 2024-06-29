import React from "react";
import { Outlet } from "react-router-dom";
import Sidenav from "./Sidenav";
// import { MultiLevelSidebar } from "./MultiLevelSidebar";

export default function Layout() {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <Sidenav />
      <div>
        <div className="ml-0 p-20">{<Outlet />}</div>
      </div>
    </div>
  );
}
