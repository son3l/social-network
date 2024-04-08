import {connect} from "react-redux";
import {HeaderClass} from "./HeaderClass";

export const HeaderContainer = connect(
    (state) => {
        return (
            {
                isAuth: state.auth.isAuth,
                login: state.auth.login,
                id: state.auth.userId,
                profile: state.auth.profile
            }
        )
    },
    (dispatch) => {
        return (
            {
                setAuth: (userId, email, login) => {
                    dispatch({type: 'set-user-data', data: {userId, email, login}})
                },
                setUser: (user)=>{

                    dispatch({type:'set-user-profile', user:user})
                }
            }
        )
    })
(HeaderClass)