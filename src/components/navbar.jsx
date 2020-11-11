import React from 'react';
import logo from '../visuals/logo.png';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-red text-light">
            <a className="navbar-brand mx-2">
                <h1 className="title-font">Brainstorm Tomatoes</h1>
            </a>
            <img src={logo} width="75" height="75" className="text-left mx-2" alt="logo"/>
        </nav>
    );
}

export default NavBar;