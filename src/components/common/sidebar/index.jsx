import React from 'react';
import './sidebar.css';
import {SidebarBottom, SidebarMoreData, SidebarData} from "../../../data/sidebar";
import SidebarOption from "./SidebarOption";


const Sidebar = () => {
    const topOptions = SidebarData;
    const more = SidebarMoreData;
    const bottomOptions = SidebarBottom;

    return (
        <div className="sidebar">
            <div className="sidebar-top">

                    {topOptions.map((option)=>{
                        return <SidebarOption option={option} isActive={option.name === 'Calls' ? true : false}/>
                    })}
            </div>
            <div>
                <SidebarOption option={more}/>
            </div>
            <div className="sidebar-bottom">
                {
                    bottomOptions.map((option)=>   {
                        return <SidebarOption option={option}/>})
                }
            </div>
        </div>
    )
        ;
};

export default Sidebar;