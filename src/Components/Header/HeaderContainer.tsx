import {connect} from "react-redux";
// @ts-ignore
import {HeaderClass} from "./HeaderClass.tsx";
// @ts-ignore
import {AuthThunkCreator, LoginThunkCreator} from "../../Redux/Reducers/AuthReducer.ts";
import {stateType} from "../../Redux/ReduxStore";

export const HeaderContainer = connect(
    (state: stateType) => {
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
                AuthThunkCreator: () => {
                    AuthThunkCreator()(dispatch)
                },
                LoginThunkCreator: (data:any) => {
                    LoginThunkCreator(data)(dispatch)
                }
            }
        )
    })
(HeaderClass)