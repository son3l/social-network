import {fetchInfoProfile, fetchPhoto, fetchProfile, fetchStatus} from "../../Api/api";
import {stopSubmit} from "redux-form";

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
        case('set-status'): {
            return {
                ...state, status: action.status
            }
        }
        case('save-photo'): {
            return {
                ...state, profile: {...state.profile, photos: {...action.photo}}
            }
        }
        case('save-info'): {
            return {
                ...state, profile: {...action.profile}
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
export const fetchStatusThunkCreator = (data) => {
    return (dispatch) => {
        fetchStatus(data).then((res) => {
            dispatch({type: 'set-status', status: res})
        })
    }
}
export const saveFileThunkCreator = (file) => {
    return (dispatch) => {
        fetchPhoto(file).then((res) => {
            dispatch({type: 'save-photo', photo: res.data.data.photos})
            dispatch({type: 'auth/save-photo', photo: res.data.data.photos})
        })
    }
}
export const saveProfileThunkCreator = (formData) => {
    return (dispatch) => {
        fetchInfoProfile(formData).then((res) => {
            if (res.data.resultCode === 0) {
                dispatch({
                    type: 'save-info', profile: {
                        userId: formData.userId,
                        aboutMe: formData.aboutMe,
                        lookingForAJob: formData.lookingForAJob,
                        lookingForAJobDescription: formData.lookingForAJobDescription,
                        fullName: formData.fullName,
                        contacts: {
                            github: formData.github,
                            vk: formData.vk,
                            facebook: formData.facebook,
                            instagram: formData.instagram,
                            twitter: formData.twitter,
                            website: formData.website,
                            youtube: formData.youtube,
                            mainLink: formData.mainLink
                        }
                    }
                })
            } else {
                dispatch(stopSubmit('changeProfile', {_error: res.data.messages}));
            }
        })
    }
}