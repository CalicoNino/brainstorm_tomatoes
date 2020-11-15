import React, { Component } from 'react';
import Comment from './comments';
import '../App.css';

class Post extends Component {
    render() { 
        return (
            <div className="my-4">
                <div className="container border rounded">
                    <div className="row">
                        <div className="col-9 m-auto">
                            <div className="row">
                                <h2 className="text-left m-3">{this.props.title}</h2> 
                            </div>
                            <div className="row-lg-10">
                                <div className="col min-h card bg-light text-dark text-left">
                                    {this.props.context}<br/>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-2 bg-tot border-0 mx-3 my-3">
                            <div className="row m-auto card bg-danger text-light rounded">
                            &nbsp;
                                <h2 className="text-center">&nbsp;&nbsp;&nbsp;{this.props.score[0]}&nbsp;&nbsp;&nbsp;</h2>/10
                            </div>
                            <div className="row m-auto"><button className="btn btn-warning m-auto btn-block" onClick={() => this.props.addScore(this.props.id)}>Rate</button></div>
                        </div>
                    </div>
                    <div className="row mx-4 my-3">
                        <button className="btn btn-sm btn-warning mx-2 float-left">Click to view available attached files</button>
                        <div className="m-auto float-left">{this.props.groups}</div>
                        <button className="btn btn-sm btn-warning mx-2 float-right" onClick={() => this.props.addComment(this.props.id)}>Add Comment</button>
                        {
                            this.props.created ==="1" ?
                            <button onClick={() => this.props.deletePost(this.props.id)} className="btn btn-sm btn-warning mx-2 float-right">Delete Post</button>
                            :null
                        }
                    </div>
                </div>
                { this.props.comments.map( comment =>
                    <Comment
                        key={comment.id}
                        postId={this.props.id}
                        created={comment.created}    
                        comment={comment.text}
                        deleteComment={this.props.deleteComment}
                    />
                )}
            </div>
        );
    }
}
 
export default Post;