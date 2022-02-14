import React from 'react';
import './styles/style.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/Pages/Home/HomePage";
import MoviesPage from "./components/Pages/Movies/MoviesPage";
import CelebritiesPage from "./components/Pages/Celebrities/CelebritiesPage";
import LoginPage from "./components/Pages/Login/LoginPage";
import SingUpPage from "./components/SingUp/SingUpPage";
import SearchPage from "./components/Pages/SearchPage/SearchPage";
import NotFoundPage from "./components/Pages/NotFound/NotFoundPage";
import LayoutPage from "./components/Pages/Layout/LayoutPage";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<LayoutPage />}>
                    <Route index element={<HomePage />}/>
                    <Route path='/movies' element={<MoviesPage/>}/>
                    <Route path='/celebrities' element={<CelebritiesPage />}/>
                    <Route path='/login' element={<LoginPage />}/>
                    <Route path='/sing-up' element={<SingUpPage />}/>
                    <Route path='/search' element={<SearchPage />}/>
                    <Route path='*' element={<NotFoundPage />}/>
                </Route>
            </Routes>
        </>
    )
}

export default App;
