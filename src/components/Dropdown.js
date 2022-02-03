import React from 'react';
import './Dropdown.css';

function Dropdown() {
    return(
        <div className="dropdown__content">

            <div className="dropdown__app">
                <a href="#"> <img className="dropdown__img" src="http://pluspng.com/img-png/google-logo-png-open-2000.png"/> </a>
                <div className="dropdown__caption"> Search </div>
            </div>
            <div className="dropdown__app">
                <a href="https://www.google.co.in/maps" target="_blank"> <img className="dropdown__img" src="http://pluspng.com/img-png/google-maps-png-google-maps-icon-1600.png"/> </a>
                <div className="dropdown__caption"> Maps </div>
            </div>
            <div className="dropdown__app">
                <a href="https://drive.google.com/" target="_blank"> <img className="dropdown__img" src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png"/> </a>
                <div className="dropdown__caption"> Drive </div>
            </div>
            <div className="dropdown__app">
                <a href="https://calendar.google.com" target="_blank"> <img className="dropdown__img" src="https://img.icons8.com/fluency/344/google-calendar--v2.png"/> </a>
                <div className="dropdown__caption"> Calender </div>
            </div>
            <div className="dropdown__app">
                <a href="https://photos.google.com" target="_blank"> <img className="dropdown__img" src="https://blogs.acu.edu/innovation_foundry/files/2017/06/google_photos1600.png"/> </a>
                <div className="dropdown__caption"> Photo </div>
            </div>
            <div className="dropdown__app">
                <a href="https://keep.google.com" target="_blank"> <img className="dropdown__img" src="https://i.pinimg.com/originals/09/96/92/099692d1d651d51b7caf3040fce0f748.png"/> </a>
                <div className="dropdown__caption"> Keep </div>
            </div>
        </div>	
    )
}

export default Dropdown;
