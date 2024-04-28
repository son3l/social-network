import axios, {AxiosResponse} from "axios";
import {fetchCaptcha, fetchLogin} from "../../Api/api";
import {stopSubmit} from "redux-form";
import {ActionType, initStateType, LoginDataType} from "../../Utils/Types/Types";


export let initState: initStateType = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    profile: null as Object | null,
    photo: null as Object | null,
    captcha: null as string | null
}

export const authReducer = (state = initState, action: ActionType): initStateType => {
    switch (action.type) {
        case('set-user-data'): {

            return {
                ...state, ...action.data, captcha: null
            }
        }
        case('set-user-profile'): {

            return {
                ...state, profile: {...action.user}, isAuth: action.isAuth
            }
        }
        case('auth/save-photo'): {
            return {
                ...state, photo: {...action.photo}
            }
        }
        case('captcha'): {
            return {
                ...state, captcha: action.url
            }
        }
        default:
            return {...state}
    }
}

export const AuthThunkCreator = (): Function => {
    return (dispatch: Function): void => {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then((res: AxiosResponse) => {
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

export const LoginThunkCreator = (data: LoginDataType): Function => {
    return (dispatch: Function): void => {
        fetchLogin(data).then((res: AxiosResponse) => {
            if (res.data.resultCode === 0) {
                if (data.type) {
                    dispatch(AuthThunkCreator());
                } else {
                    dispatch({type: 'set-user-profile', user: null});
                    dispatch({type: 'set-user-data', data: null, isAuth: false});
                }
            } else if (res.data.resultCode === 10) {
                dispatch(GetCaptchaThunkCreator())
            } else {
                dispatch(stopSubmit('login', {_error: res.data.messages[0]}));
            }
        })
    }
}

export const GetCaptchaThunkCreator = (): Function => {
    return (dispatch: Function): void => {
        fetchCaptcha().then((res: AxiosResponse) => {
            dispatch({type: 'captcha', url: res.data.url});
        })
    }
}