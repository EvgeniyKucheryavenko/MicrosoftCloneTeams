import React from 'react';
import './rightFold.css';
import {CallsContact} from "../../../data/calls";
import ContactCard from "./ContactCard";

const RightFold = () => {

    const contacts = CallsContact;

    return (
        <div className="rightFold">
            <div className="rightFold-heading">
                <label className="heading-label">
                    Contacts
                </label>
            </div>
            <div className="rightFold-options">
                    <div className="contact-search">
                        <input placeholder="Find contact"/>
                        <div className="contact-search-icon">
                            <i className="fas fa-search"></i>
                        </div>
                    </div>
                    <div className="add-button">
                        <div className="add-icon">
                            <i className="fas fa-user"></i>
                        </div>
                        <label className="add-label">Add Contact</label>
                    </div>
            </div>
            <div className="contact-list">
                {contacts.map(item=>{
                    return <ContactCard item={item} key={item.id}/>
                })}
            </div>
        </div>
    );
};

export default RightFold;