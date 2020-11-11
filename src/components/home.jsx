import React from 'react';
import beach from '../visuals/beach.mp4';
import school from '../visuals/school.png';

const Home = () => {
    return (
        <React.Fragment>
            <div className="video-background">
                <div className="video-wrap">
                    <div id="video">
                        <video id="bg-vid" autoPlay loop muted playsInline>
                            <source src={beach} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>

            <div className="caption">
                <div className="card w-300">
                    <h5 className="title-font font-italic">Where you find your next great idea! 💡</h5>
                    <img src={school} width="100" height="100" className="text-left mx-2" alt="school"/>
                    <button></button>
                </div>
                
            </div>
        </React.Fragment>
    );
}

export default Home;