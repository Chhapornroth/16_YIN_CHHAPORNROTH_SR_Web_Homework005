import React from 'react';
import { DropdownComponent } from './DropdownComponent';

const DashboardComponent = ({ children , dropdown, onCategoryChange}) => {
  
  return (
    <div className='bg-white w-full h-full rounded-t-[50px] pt-10 px-10'>
      <div className={`border-b border-b-[#1075AB] pb-2 ${children.key !== "Homepage" ? "flex justify-between" : ""}`}>
        <p className={`bg-blue-50 h-10 leading-10 text-center rounded-xl font-medium text-[#1075AB] ${children.key === "Homepage" ? "w-30" : "px-5"}`}>{children.key}</p>
        {children.key !== "Homepage" && (
          <DropdownComponent onValueChange={onCategoryChange}>
            {dropdown}
          </DropdownComponent>
        )}
      </div>
      <div className='h-[76vh] overflow-auto' style={{ scrollbarWidth: "none" }}>
        {children}
      </div>
    </div>
  )
}

export default DashboardComponent