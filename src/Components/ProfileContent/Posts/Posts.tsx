// @ts-ignore
import {Post} from "./Post.tsx";
// @ts-ignore
import logo from '../logo192.png';
import * as React from "react";
// @ts-ignore
import {ReduxFormPostArea} from "./PostArea.tsx";

interface PropsType{
    addPost: (data:string)=>void,
    postData: Array<any>
}
export const Posts = (props: PropsType) => {
    const submitPost = (data: any)=>{
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