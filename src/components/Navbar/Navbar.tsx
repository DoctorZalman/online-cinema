import React from 'react';
import './Navbar.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <header>
                <div className='main_container menu'>
                    <div className="logo">
                        <img src="../../img/logo1.png" alt="logo"/>
                    </div>
                    <div className="menu-items">
                        <ul className='nav-menu'>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/movies">Movies</NavLink>
                            <NavLink to="/celebrities">Celebrities</NavLink>
                        </ul>
                        <ul className='log-in-menu'>
                            <NavLink to='/search'>Search</NavLink>
                            <NavLink to='/login'>Log In</NavLink>
                            <NavLink to='/sing-up' className='defaultButton'>Sing Up</NavLink>
                        </ul>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Navbar;
