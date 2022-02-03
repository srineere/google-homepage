import React, { useState } from 'react';
import './Header.css';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Dropdown from './Dropdown';

function Header() {
    
    const [showDropdown, setShowDropdown] = useState(false);

    const dropdown = e => {
        e.preventDefault();
        if(showDropdown)
            setShowDropdown(false) ;
        else
            setShowDropdown(true);
    }

    return(
        <div className="home__header">
            <div className="home__headerLeft">
            </div>
            <div className="home__headerRight">
                <a href="https://mail.google.com/" target="_blank">Gmail</a>
                <a href="https://www.google.co.in/imghp" target="_blank">Images</a>
                <a className="app__icon" onClick={dropdown}><AppsIcon /></a>
                <Avatar className="avatar" />
                { showDropdown ? <Dropdown /> : null }
            </div>
        </div>
    )
}

export default Header;


