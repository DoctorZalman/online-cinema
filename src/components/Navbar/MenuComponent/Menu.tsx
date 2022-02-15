import React from 'react';
import {NavLink} from "react-router-dom";
import './Menu.css'

const Menu = () => {
    return (
        <ul className='nav-menu'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
            <NavLink to="/celebrities">Celebrities</NavLink>
        </ul>
    );
};

export default Menu;
