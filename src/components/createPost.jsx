import React, { Component } from 'react';
import NavBar from './navbar';
import Search from './search';
import {Link} from 'react-router-dom';

class CreatePost extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <NavBar />
                <div className="caption-text text-center">
                    <div className="row mx-auto">
                        <div className="mx-3 col-8 rounded bg-dark text-left">
                            <div className="row">
                               <Link to='/feed' className="btn btn-warning m-3 float-left">Return to Feed</Link>  
                            </div>
                            <div className="row mx-3">
                                <div className="col-md-11">
                                    <h3>Create A Post</h3>
                                </div>
                                <button className="btn btn-lg btn-warning float-right">Post</button>
                            </div>
                            <div className="row">
                                
                            </div>
                            
                        </div>
                        <div className="col-sm-3 m-auto bg-dark rounded">
                            <Search/>
                        </div>
                </div>
                
                  

                </div>
            </React.Fragment> 
        );
    }
}
 
export default CreatePost;