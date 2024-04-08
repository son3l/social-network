import {Post} from "./Post";
import logo from '../logo192.png';
import React from "react";

export const Posts = (props) => {
    let ref = React.createRef();
    return (
        <div>
            <div> Create Posts</div>
            <div>
                <textarea ref={ref} onChange={() => {
                    props.typingPost(ref)
                }} value={props.createPostValue}></textarea>
            </div>
            <button onClick={() => {
                props.addPost()
            }}>Create
            </button>
            <div>My Posts</div>
            {
                props.postData.map((post) => {
                    return <Post message={post.message} image={logo}/>
                })
            }
        </div>
    )
}