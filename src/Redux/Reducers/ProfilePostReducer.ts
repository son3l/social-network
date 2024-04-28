import {fetchInfoProfile, fetchPhoto, fetchProfile, fetchStatus} from "../../Api/api";
import {stopSubmit} from "redux-form";
import {AxiosResponse} from "axios";
import {ActionProfileType, profileType} from "../../Utils/Types/Types";



let profile: profileType = {
    createPostValue: '',
    postData: [
        {id: 1, message: "bla"},
        {id: 2, message: "bla bla"},
        {id: 3, message: "bla bla bla"},
    ],
    profile: null,
    status: null,
    saveProfile: false
};
export const ProfilePostReducer = (state = profile, action: ActionProfileType): profileType => {
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
                ...state, profile: {...action.profile, photos: state.profile.photos}, saveProfile: !state.saveProfile,
            }
        }
        case('set-save-profile'): {
            return {
                ...state, saveProfile: !state.saveProfile
            }
        }
        default: {
            return state;
        }
    }
}

export const getProfileThunkCreator = (profileId: number): Function => {
    return (dispatch: Function): void => {
        fetchProfile(profileId).then((res: AxiosResponse) => {
            dispatch({type: 'set-profile', profile: res})
        })

    }
}
export const fetchStatusThunkCreator = (data: any): Function => {
    return (dispatch: Function): void => {
        fetchStatus(data).then((res: AxiosResponse) => {
            dispatch({type: 'set-status', status: res})
        })
    }
}
export const saveFileThunkCreator = (file: any): Function => {
    return (dispatch: Function): void => {
        fetchPhoto(file).then((res: AxiosResponse) => {
            dispatch({type: 'save-photo', photo: res.data.data.photos})
            dispatch({type: 'auth/save-photo', photo: res.data.data.photos})
        })
    }
}
export const saveProfileThunkCreator = (formData: any): Function => {
    return (dispatch: Function): void  => {
        fetchInfoProfile(formData).then((res: AxiosResponse) => {
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