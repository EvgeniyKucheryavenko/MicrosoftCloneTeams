import React from 'react';
import './ContactCard.css';

const ContactCard = ({item}) => {
    return (
        <div className="contact">
            <div className="contact-top">
                <img src={item.avatar} alt="avatar" className="contact-avatar"/>
                <div className="contact-info">
                    <label className="contact-title">{item.name}</label>
                    <label className="contact-subtitle">{item.type}</label>
                </div>
            </div>
            <div className="contact-icons">
                <div className="contact-icon">
                    <i className="fas fa-microphone"></i>
                </div>
                <div className="contact-icon">
                    <i className="fas fa-video"></i>
                </div>
                <div className="contact-icon">
                    <i className="fas fa-ellipsis-h"></i>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;