import React, { Component } from 'react';

class Search extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <h5 className="text-left my-2">Quick Search</h5>
                <p className="text-left">
                    Enter a keyword or a hashtag to search:
                </p>
                <div className="text-left form-group">
                    <textarea className="form-control" rows="5" id="comment"></textarea>
                </div>
                <button className="btn-warning float-right">Search</button>
                <br/>

                <p className="text-left">Your Results:</p>
                <div className="card bg-light" rows='5' id="results">

                </div>
                <br/>
                <p className="text-left">Top Used Hashtags Today:</p>
                <div className='card bg-success'>
                    <h7>
                        <span className='badge badge-pill badge-dark text-light m-1'>#Geography</span>
                        <span className='badge badge-pill badge-dark text-light m-1'>#Biology</span>
                        <span className='badge badge-pill badge-dark text-light m-1'>#Cooking</span>
                        <span className='badge badge-pill badge-dark text-light m-1'>#Chemistry</span>
                        <span className='badge badge-pill badge-dark text-light m-1'>#Arts&Crafts</span>
                        <span className='badge badge-pill badge-dark text-light m-1'>#Music</span>
                        <span className='badge badge-pill badge-dark text-light m-1'>#Software</span>
                        <span className='badge badge-pill badge-dark text-light m-1'>#English</span>
                    </h7>                          
                </div><br/>
            </React.Fragment>
        );
    }
}
 
export default Search;