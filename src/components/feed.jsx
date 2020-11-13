import React, { Component } from 'react';
import NavBar from './navbar';
import bgtomatoes from '../visuals/bgtomatoes.mp4';
import Post from './post';
import Search from './search';
import {Link} from 'react-router-dom';

class Feed extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <NavBar />
                <div className="caption-text text-center">
                    <div className="row">
                        <div className="mx-auto col-sm-7 card bg-dark">
                            <button className="btn-warning my-2">Create a post</button><hr/>
                            <Post/>
                        </div>
                        <div className="h-100 mx-auto col-sm-3 card bg-secondary">
                            <Search/>
                        </div>
                </div>
                
                  

                </div>
            </React.Fragment> 
        );
    }
}
 
export default Feed;
