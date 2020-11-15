import React, { Component } from 'react';
import NavBar from './navbar';
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
                                <div className="col-md-10">
                                    <h3>Create A Post</h3>
                                </div>
                                <button className="btn btn-lg btn-warning float-right">Post</button>
                            </div>
                            <div className="row mx-3">
                                <div className="col-md-10">
                                    <input type="text" id="title" className="form-control" placeholder="Post Title"/>
                                    <input type="text" id="title" className="form-control my-2" placeholder="Post Description"/>
                                    <div className="radio">
                                        <label>
                                            <input type="radio" value="option1" checked={true} />
                                            Project Related
                                        </label>
                                    </div>
                                    <div className="radio">
                                        <label>
                                            <input type="radio" value="option2" checked={true} />
                                            Assignment Related
                                        </label>
                                    </div>
                                    <input type="text" id="title" className="form-control my-2" placeholder="Add Group using the format: #[Group]"/>
                                    <button className="btn btn-sm btn-warning float-left">Attach a photo or document</button>
                                    <br/>
                                    <br/>
                                    <p>
                                        If you would like to edit your post later, use this generated link:<br/>
                                         <a href="#" className="center">/editmypost</a>
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-sm-3 m-auto bg-dark rounded">
                        <h5 className="text-left my-2">Quick Search</h5>
                <p className="text-left">
                    Enter a keyword or a hashtag to search available ratings:
                </p>
                <div className="text-left form-group">
                    <textarea className="form-control" rows="2" id="search"></textarea>
                </div>
                <button className="btn btn-warning btn-sm float-right">Search</button>
                <br/>
                <br/>

                <p className="text-left">Your Results:</p>
                <div className="card bg-light text-dark" id="results">
                    {this.props.searchResults}
                </div>
                <br/>
                <p className="text-left">Top Used Hashtags Today:</p>
                <div className='card bg-light'>
                    <h6>
                        <span className='badge badge-pill badge-dark text-light m-1'>#Geography 🗺️</span>
                        <span className='badge badge-pill badge-dark text-light m-1'>#Biology 🧬</span>
                        <span className='badge badge-pill badge-dark text-light m-1'>#Cooking 🧪</span>
                        <span className='badge badge-pill badge-dark text-light m-1'>#Chemistry</span>
                        <span className='badge badge-pill badge-dark text-light m-1'>#Arts&Crafts 🎨</span>
                        <span className='badge badge-pill badge-dark text-light m-1'>#Music 🎼</span>
                        <span className='badge badge-pill badge-dark text-light m-1'>#Software 💻</span>
                        <span className='badge badge-pill badge-dark text-light m-1'>#Literature 📚</span>
                    </h6>                          
                </div><hr/>
                <Link to='/createpost' className="btn btn-warning btn-block btn-lg mb-3 float-left">Create a post</Link><br/>
                        </div>
                </div>
                </div>
            </React.Fragment> 
        );
    }
}
 
export default CreatePost;