import React, { Component } from 'react';
import NavBar from './navbar';
import Post from './post';
import Search from './search';

class Feed extends Component {
    state = { 
        posts:[
            {id:"0",
            title: "Help!! Need Ideas for my Geography Project",
            score: [6,10],
            context: "I need to create an interactive project to teach elemantary kids for my primary school education class. I need to teach them about world countries. So far my ideas are to make Web based atlas or Fun educational videos.",
            groups: ["#Assignment ", "#Project ", "#Geography ", "#Kids "],
            items: [],
            comments: ["Not a bad idea, I would recommend doing videos since more kids are virtual learners. I rated your idea 7/10"],
            date:""},
            {id:"1",
            title: "Rate my idea for my webdev class",
            score: [9,4],
            context: "For my webdev class, we have to think of an idea that will solve issues related to unergraduate students. My idea is to create a website where students can post iddeas relevant to their projects and assignments. Also, other students can comment or rank those ideas.",
            groups: ["#Project ", "#Software ", "#WebDev "],
            items: [],
            comments: ["Great idea!! I rated it 9/10. I would recommend making it more anonymous just incase professors find out about this",
                "Not really an issue, I think students alreayd have much better resources."]}
        ] 
    }

    addComment = (id) => {
        var comment = prompt("What is your comment?")
        if(!comment){
            const posts = [...this.state.posts];
            posts[id].comments.push(comment);
            this.setState({posts})
        }  
    }

    addScore = (id) => {
        var rating = prompt("What is your rating out of 10? (Any other rating will be disregarded)")
        if(!rating){
            const posts = [...this.state.posts];
            console.log(rating)
            posts[id].score[0] = (posts[id].score[0]*posts[id].score[1] + rating)/(posts[id].score[1]+1)
            posts[id].score[1] += 1
            this.setState({posts})
        }  
    }

    render() { 
        return ( 
            <React.Fragment>
                <NavBar />
                <div className="caption-text text-center">
                    <div className="row mx-auto">
                        <div className="mx-3 col-8 rounded bg-tot">
                        { this.state.posts.map( post =>
                            <Post
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            score={post.score}
                            context={post.context}
                            groups={post.groups}
                            items={post.items}
                            comments={post.comments}
                            addComment={this.addComment}
                            addScore={this.addScore}

                            />
                        )}
                        </div>
                        <div className="col-sm-3 mx-auto bg-tot rounded h-100">
                            <Search/>
                        </div>
                    </div>
                </div>
            </React.Fragment> 
        );
    }
}
 
export default Feed;
