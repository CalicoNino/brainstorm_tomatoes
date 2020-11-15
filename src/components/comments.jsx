import React, { Component } from 'react';

class Comment extends Component {
    render() { 
        return ( 
            <div className="row mx-2">
                <div className="col-sm-4"></div>
                <div className="col border border-top-0">
                    <div className="m-2 card text-left text-dark">
                        <p className="m-2">
                            {this.props.comment}
                        </p>
                    </div>
                </div>
            </div>
            
        );
    }
}
 
export default Comment;