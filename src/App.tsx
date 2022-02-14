import React from 'react';
import './styles/style.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar/Navbar";
import MainSlider from "./components/Main-slider/MainSlider";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
    return (
        <>
            <Navbar/>
            <SearchBar/>
            <MainSlider/>
        </>
    )
}

export default App;
