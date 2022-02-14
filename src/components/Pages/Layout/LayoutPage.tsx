import React from 'react';
import Navbar from "../../Navbar/Navbar";
import {Outlet} from "react-router-dom";

const LayoutPage = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
};

export default LayoutPage;
