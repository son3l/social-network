// @ts-ignore
import {Posts} from "./Posts.tsx";
import {connect} from "react-redux";
import {stateType} from "../../../Redux/ReduxStore";

export const PostsContainer = connect((state: stateType) => {
        return ({
            postData: state.profile.postData,
        })
    }, (dispatch) => {
        return ({
            addPost: (newPost: string) => {
                dispatch({type: 'add-post', post: newPost})
            }
        })
    }
)(Posts)