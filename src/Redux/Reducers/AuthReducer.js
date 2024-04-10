import axios from "axios";

let initState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    profile: null
}
export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case('set-user-data'): {

            return {
                ...state, ...action.data, isAuth: true
            }
        }
        case('set-user-profile'): {

            return {
                ...state, profile: {...action.user}
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
                            dispatch({type: 'set-user-profile', user: res.data})
                        });
                    dispatch({
                        type: 'set-user-data',
                        data: {userId: res.data.data.id, email: res.data.data.email, login: res.data.data.login}
                    })
                }
            })
    }
}