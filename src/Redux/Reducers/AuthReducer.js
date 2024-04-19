import axios from "axios";
import {fetchLogin} from "../../Api/api";
import {stopSubmit} from "redux-form";

let initState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    profile: null,
    photo: null
}
export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case('set-user-data'): {

            return {
                ...state, ...action.data
            }
        }
        case('set-user-profile'): {

            return {
                ...state, profile: {...action.user}, isAuth: action.isAuth
            }
        }
        case('auth/save-photo'):{
            return {
                ...state, photo: {...action.photo}
            }
        }
        default:
            return {...state}   
    }
}

export const AuthThunkCreator = () => {
    return (dispatch) => {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then((res) => {
                if (res.data.resultCode === 0) {
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${res.data.data.id}`)
                        .then((res) => {
                            dispatch({type: 'set-user-profile', user: res.data, isAuth: true})
                        });
                    dispatch({
                        type: 'set-user-data',
                        data: {userId: res.data.data.id, email: res.data.data.email, login: res.data.data.login},
                    })
                }
            })
    }
}

export const LoginThunkCreator = (data) => {
    return (dispatch) => {
        fetchLogin(data).then((res) => {
            if(res.data.resultCode===0) {
                if (data.type) {
                    dispatch(AuthThunkCreator());
                } else {
                    dispatch({type: 'set-user-profile', user: null});
                    dispatch({type: 'set-user-data', data: null, isAuth: false});
                }
            } else {
                dispatch(stopSubmit('login',{_error: res.data.messages[0]}));
            }
        })
    }
}
