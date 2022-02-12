import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <header>
            <div className='main_container menu'>
                <div className="logo">
                    <img src="../../img/logo1.png" alt="logo"/>
                </div>
                <div className="menu-items">
                    <ul className='nav-menu'>
                        <li>Movies</li>
                        <li>TV shows</li>
                        <li>People</li>
                        <li>More</li>
                    </ul>
                    <ul className='log-in-menu'>
                        <li>Log In</li>
                        <li>Sing up</li>
                        <li>Search</li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
