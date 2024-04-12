import {Post} from "./Post";
import logo from '../logo192.png';
import React from "react";
import {ReduxFormPostArea} from "./PostArea";

export const Posts = (props) => {
    const submitPost = (data)=>{
        props.addPost(data.newPost);
    }
    return (
        <div>
            <div> Create Posts</div>
            <ReduxFormPostArea onSubmit={submitPost}/>
            <div>My Posts</div>
            {
                props.postData.map((post) => {
                    return <Post message={post.message} image={logo}/>
                })
            }
        </div>
    )
}