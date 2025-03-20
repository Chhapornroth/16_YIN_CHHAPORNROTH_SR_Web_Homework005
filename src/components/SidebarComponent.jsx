'use client'

import React from "react";
import { sidebarList } from "../data/sidebarList";
import {  Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function SidebarComponent() {
  const pathName = usePathname();
  
  return (
    <div className="p-5 h-screen bg-white shadow-xl min-w-80">
      {/* logo */}
      <div className="flex flex-col items-center">
        <div className="w-28 h-28 rounded-full overflow-hidden">
          <img
            className="w-fit h-fit"
            src="https://i.pinimg.com/736x/07/94/f6/0794f68eaf68cf2ee350208bf493b516.jpg"
            alt="hrd logo"
            width={60}
            height={60}
          />
        </div>
        <h2 className="text-xl text-[#155281] font-medium">
          Sebastian Milder
        </h2>
        <p className="text-[#1075AB]">sebastian.milder@gmail.com</p>
      </div>

      {/* sidebar list */}
      <div className="p-4 w-full flex flex-col gap-10">
        <div className="space-y-1">
          {sidebarList?.map((option) => (
            <Link
              href={option?.url}
              key={option?.id}
              className={`flex items-center gap-3 py-2 px-5 rounded-xl cursor-pointer hover:bg-gray-200 hover:font-semibold 
              ${pathName === option.url ? "bg-blue-50" : "" }
              `}
            >
              <option.icon className="w-4 h-4 text-primary-text text-red-600" />{" "}
              <p className="text-[#155281]">{option.label}</p>
            </Link>
          ))}
        </div>
        <Link href="" className="flex items-center gap-3 py-2 px-5 rounded-xl cursor-pointer bg-gray-50 text-[#155281]  hover:bg-gray-200">
          <Settings className="w-4 h-4 text-primary-text" />
          <p>Settings</p>
        </Link>
      </div>
    </div>
  );
}
