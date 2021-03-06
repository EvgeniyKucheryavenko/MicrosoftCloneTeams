import React from 'react';
import './DialerItem.css';

const DialerItem = ({item}) => {
    return (
        <div className="dialer-item">
            <img
                className="item-avatar"
                src={item.avatar} alt="avatar-dialers"
            />
            <div className="item-info">
                <label className="item-title">{item.name}</label>
                <label className="item-subtitle">{item.type}</label>
            </div>
            <div className="item-icons">
                <div className="item-icon">
                    <i className="fas fa-microphone"></i>
                </div>
                <div className="item-icon">
                    <i className="fas fa-video"></i>
                </div>
            </div>
        </div>
    );
};

export default DialerItem;