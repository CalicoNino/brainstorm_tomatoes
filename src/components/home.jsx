import React from 'react';
import tomatoes from '../visuals/tomatoes.mp4';
import school from '../visuals/school.png';
import logo from '../visuals/logo.png';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg bg-red text-light fixed-top">
                <a className="navbar-brand mx-auto">
                    <img src={logo} width="90" height="90" className="text-left mx-2" alt="logo"/>
                </a>
            </nav>
            <div className="video-background">
                <div className="video-wrap">
                    <div id="video">
                        <video id="bg-vid" autoPlay loop muted playsInline>
                            <source src={tomatoes} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
            <div className="caption">
                <h1 className="title-font">Brainstorm Tomatoes</h1>
                <h5 className="title-font">
                    Where you pick your next great school project idea! 
                    <img src={school} width="25" height="25" className="text-left mx-2" alt="school"/>
                </h5>
                <Link to='/feed' className="btn btn-outline-light btn-lg font-weight-bold my-3">Begin</Link>
            </div>
        </React.Fragment>
    );
}

export default Home;