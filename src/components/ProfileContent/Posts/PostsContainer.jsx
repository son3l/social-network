import {Posts} from "./Posts";
import {connect} from "react-redux";

export const PostsContainer = connect((state) => {
        return ({
            postData: state.profile.postData,
            createPostValue: state.profile.createPostValue
        })
    }, (dispatch) => {
        return ({
            addPost: () => {
                dispatch({type: 'add-post'})
            },
            typingPost: (ref) => {
                dispatch({type: 'typing-post', message: ref.current.value})
            }
        })
    }
)(Posts)
/*
return (<Posts typingPost={(ref) => {
        props.store.dispatch({type: 'typing-post', message: ref.current.value});
    }
    }
               addPost={() => {
                   props.store.dispatch({type: 'add-post'});
               }
               }
               postData={props.store.getState().profile.postData}
               createPostValue={props.store.getState().profile.createPostValue}/>
)
}*/
