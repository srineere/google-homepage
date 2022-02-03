import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';

function Search({ hideButtons = false }) {

    const [input, setInput] = useState("");

    const search = e => {
        e.preventDefault();
        if(input!="")
            window.location.href="https://www.google.com/search?q=" + input;
    }

    const lucky = e => {
        e.preventDefault();
        window.location.href = "https://www.google.com/doodles";
    }

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>

            <div className="search__buttons">
                <Button type="submit" variant="outlined" onClick={search}>Google Search</Button>
                <Button variant="outlined" onClick={lucky}>I'm Feeling Lucky</Button>
            </div>
            

            <div className="languages__links">
                Google offered in:  
                    <a>हिन्दी</a>
                    <a>বাংলা</a>
                    <a>తెలుగు</a>
                    <a>मराठी</a>
                    <a>தமிழ்</a>
                    <a>ગુજરાતી</a>
                    <a>ಕನ್ನಡ</a>
                    <a>മലയാളം</a>
                    <a>ਪੰਜਾਬੀ</a>
            </div>
        </form>
    );
}

export default Search;
