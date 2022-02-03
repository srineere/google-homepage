import React from 'react';
import './Home.css';
import Header from './Header';
import Search from './Search'
import Footer from './Footer';

function Home() {
    return (
        <div className="home">
            <Header/>
            
            <div className="home__body">
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google logo" />
                <div className="home__inputContainer">
                    <Search />
                </div>
            </div>

            <Footer/>
        </div>
    )
}
export default Home;