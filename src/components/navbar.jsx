import React from 'react';
import logo from '../visuals/logo.png';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-red text-light fixed-top">
            <a className="navbar-brand mx-auto">
                <img src={logo} width="40" height="40" className="text-left mx-2" alt="logo"/>
            </a>
        </nav>
    );
}

export default NavBar;