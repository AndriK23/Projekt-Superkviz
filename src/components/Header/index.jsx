import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <>
        <header className="header">

        <h1 className="header__title">Superkvíz</h1>

        <nav className="menu">
        <NavLink to="/" className={({ isActive }) =>
              isActive ? "menu__link menu__link--active" : "menu__link"}> Úvod </NavLink>

        <NavLink to="/list" className={({ isActive }) =>
              isActive ? "menu__link menu__link--active" : "menu__link"}> Kvízy </NavLink>
        <NavLink to="/chart" className={({ isActive }) =>
              isActive ? "menu__link menu__link--active" : "menu__link"}> Žebříček </NavLink>
        </nav>

        </header>
        </>
    )
}

export default Header;