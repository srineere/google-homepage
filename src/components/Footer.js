import React from 'react';
import './Footer.css'

function Footer()  {
    return(
        <footer>
        <nav className="clearfix">
            <ul className="left">
            <li>India</li>
            </ul>
        </nav>
        <nav className="clearfix">
            <ul className="left">
            <li><a>About</a></li>
            <li><a>Advertising</a></li>
            <li><a>Business</a></li>
            <li><a>How Search Works</a></li>
            </ul>
            <ul className="right">
            <li><a>Privary</a></li>
            <li><a>Terms</a></li>
            <li><a>Settings</a></li>
            </ul>
        </nav>
        </footer>
    )
}

export default Footer;

