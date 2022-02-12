import React from 'react';
import './SearchBar.css'

const SearchBar = () => {
    return (
        <div className='main_container'>
            <div className='top-search'>
                <select>
                    <option value="movie">Movie</option>
                    <option value="tv-show">TV Show</option>
                </select>
                <input type="text" placeholder='Search for a movie, TV Show or celebrity that you are looking for'/>
            </div>
        </div>
    );
};

export default SearchBar;
