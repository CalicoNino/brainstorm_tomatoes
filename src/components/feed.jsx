import React, { Component } from 'react';
import NavBar from './navbar';
import Post from './post';
import Search from './search';

class Feed extends Component {

    addComment = (id) => {
        var comment = prompt("What is your comment?")
        if(!comment){
            const posts = [...this.state.posts];
            posts[id].comments.push(comment);
            this.setState({posts})
        }  
    }

    render() { 
        return ( 
            <React.Fragment>
                <NavBar />
                <div className="caption-text text-center my-2">
                    <div className="row mx-auto">
                        <div className="mx-3 col-8 rounded bg-tot">
                        { this.props.posts.slice(0).reverse().map( post =>
                            <Post
                            key={post.id}
                            id={post.id}
                            created={post.created}
                            title={post.title}
                            score={post.score}
                            context={post.context}
                            groups={post.groups}
                            items={post.items}
                            comments={post.comments}
                            deletePost={this.props.deletePost}
                            addComment={this.props.addComment}
                            deleteComment={this.props.deleteComment}
                            addScore={this.props.addScore}
                            />
                        )}
                        </div>
                        <div className="col-sm-3 mx-auto bg-tot rounded h-100">
                            <Search
                            key="0"
                            searchResults={this.props.searchResults}
                            toSearch={this.props.toSearch}/>
                        </div>
                    </div>
                </div>
            </React.Fragment> 
        );
    }
}
 
export default Feed;
