import React from 'react';
import './Navbar.css'
import {NavLink} from "react-router-dom";
import Menu from "./MenuComponent/Menu";

const Navbar = () => {
    return (
        <>
            <header>
                <div className="main_container">
                <div className='menu'>
                    <div className="logo">
                        <img src="../../img/logo1.png" alt="logo"/>
                    </div>
                    <div className="menu-items">
                        <Menu />
                        <ul className='log-in-menu'>
                            <NavLink to='/search'>Search</NavLink>
                            <NavLink to='/login'>Log In</NavLink>
                            <NavLink to='/sing-up' className='defaultButton'>Sing Up</NavLink>
                        </ul>
                    </div>
                </div>
                </div>
            </header>

        </>
    );
};

export default Navbar;
