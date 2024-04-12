import {Posts} from "./Posts";
import {connect} from "react-redux";

export const PostsContainer = connect((state) => {
        return ({
            postData: state.profile.postData,
        })
    }, (dispatch) => {
        return ({
            addPost: (newPost) => {
                dispatch({type: 'add-post', post: newPost})
            }
        })
    }
)(Posts)