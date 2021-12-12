import React, {useState} from 'react';
import './header.css';

const Header = () => {
    const [value, setValue]=useState('')

    return (
        <div className="header">
            <div className="header-menu">
                <i className="fas fa-border-none"></i>
            </div>
            <div className="header-leftFold">
                <label className="header-label">Microsoft Teams</label>
            </div>
            <div className="header-rightFold">
                <div className="header-search">
                    <i className="fas fa-search"></i>
                    <input placeholder="Search Microsoft Teams" value={value} onChange={(event)=>setValue(event.target.value)}/>
                </div>
                <div className="header-profile">
                   <div className="header-options">
                       <i className="fas fa-ellipsis-h"></i>
                   </div>
                    <img
                        src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1639298835~hmac=2c75cf9471ed3eed90547429c5a9568f" alt="avatar-image" className="header-avatar"/>
                </div>
            </div>
        </div>
    );
};

export default Header;