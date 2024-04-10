import {fetchProfile} from "../../Api/api";

let profile = {
    createPostValue: '',
    postData: [
        {id: 1, message: "bla"},
        {id: 2, message: "bla bla"},
        {id: 3, message: "bla bla bla"},
    ],
    profile: null,
};
export const ProfilePostReducer = (state = profile, action) => {
    switch (action.type) {
        case('typing-post'): {
            /*
            let copyState = {...state};
            copyState.createPostValue = action.message;*/
            return {
                ...state,
                createPostValue: action.message
            };
        }
        case('add-post'): {
            /*  let copyState = {...state};
              copyState.postData = [...state.postData];
              copyState.postData.push({
                  id: copyState.postData.length + 1,
                  message: copyState.createPostValue
              });
              /!*state.postData.push({
                  id: state.postData.length + 1,
                  message: state.createPostValue
              });*!/
              copyState.createPostValue = '';*/
            return {
                ...state,
                createPostValue: '',
                postData: [...state.postData, {id: state.postData.length + 1, message: state.createPostValue}]
            };
        }
        case('set-profile'): {
            return {
                ...state, profile: {...action.profile}
            };
        }
        default: {
            return state;
        }
    }
}

export const getProfileThunkCreator = (profileId) => {
    return (dispatch) => {
        fetchProfile(profileId).then((res) => {
            dispatch({type: 'set-profile', profile: res})
        })

    }
}