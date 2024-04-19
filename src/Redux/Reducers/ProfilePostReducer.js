import {fetchPhoto, fetchProfile, fetchStatus} from "../../Api/api";

let profile = {
    createPostValue: '',
    postData: [
        {id: 1, message: "bla"},
        {id: 2, message: "bla bla"},
        {id: 3, message: "bla bla bla"},
    ],
    profile: null,
    status: null
};
export const ProfilePostReducer = (state = profile, action) => {
    switch (action.type) {
        case('typing-post'): {
            return {
                ...state,
                createPostValue: action.message
            };
        }
        case('add-post'): {
            return {
                ...state,
                createPostValue: '',
                postData: [...state.postData, {id: state.postData.length + 1, message: action.post}]
            };
        }
        case('set-profile'): {
            return {
                ...state, profile: {...action.profile}
            };
        }
        case('set-status'):{
            return {
                ...state, status: action.status
            }
        }
        case('save-photo'):{
            return {
                ...state, profile: {...state.profile, photos:{...action.photo}}
            }
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
export const fetchStatusThunkCreator = (data)=>{
    return (dispatch)=>{
        fetchStatus(data).then((res)=>{
            dispatch({type:'set-status',status: res})
        })
    }
}
export const saveFileThunkCreator =(file)=>{
    return (dispatch)=>{
        fetchPhoto(file).then((res)=>{
            dispatch({type:'save-photo', photo:res.data.data.photos})
            dispatch({type:'auth/save-photo', photo:res.data.data.photos})
        })
    }
}