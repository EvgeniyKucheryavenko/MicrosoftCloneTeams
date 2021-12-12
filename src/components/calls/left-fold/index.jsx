import React from 'react';
import './leftfold.css';
import {CallsMenu, DialerList} from "../../../data/calls";
import MenuItem from "./MenuItem";
import DialerItem from "./DialerItem";


const LeftFold = () => {
    const menu = CallsMenu;
    const dialerList = DialerList;

    return (
        <div className="leftFold">
            <div className="leftFold-menu">
                <label className="">Calls</label>
                <div className="menu-items">
                    {menu.map(item=>{
                        return <MenuItem item={item} isActive/>
                    })}
                </div>
            </div>
            <div className="leftFold-dialer">
                <label className="dialer-label">Make all Calls</label>
                <div className="dialer-search">
                    <input placeholder="Type a name"/>
                </div>
                <div className="dialer-suggested">
                    <label className="suggested-label">Suggested</label>
                    <div className="suggested-list">
                        {dialerList.map(item=>{
                            return <DialerItem item={item} key={item.id}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftFold;