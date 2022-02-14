import React from 'react';
import './Navbar.css'
import {Link} from "react-router-dom";

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
                            <Link to="/">Home</Link>
                            <Link to="/movies">Movies</Link>
                            <Link to="/celebrities">Celebrities</Link>
                        </ul>
                        <ul className='log-in-menu'>
                            <Link to='/search'>Search</Link>
                            <Link to='/login'>Log In</Link>
                            <Link to='/sing-up' className='defaultButton'>Sing Up</Link>
                        </ul>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Navbar;
