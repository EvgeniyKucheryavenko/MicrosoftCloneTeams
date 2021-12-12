import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header-menu">
                <i className="fi fi-rr-Layout-fluid"></i>
            </div>
            <div className="header-leftFold">
                <label className="header-label">Microsoft Teams</label>
            </div>
            <div className="header-rightFold">
                <div className="header-search">
                    <i className="fi fi-rr-Search"></i>
                </div>
                <div>
                    <input type="text" className="input-search"/>
                </div>

            </div>
        </div>
    );
};

export default Header;