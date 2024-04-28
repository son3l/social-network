import {connect} from "react-redux";
// @ts-ignore
import {LoginPage} from "./LoginPage.tsx";
// @ts-ignore
import {LoginThunkCreator} from "../../Redux/Reducers/AuthReducer.ts";
import {stateType} from "../../Redux/ReduxStore";

export const LoginContainer = connect(
    (state: stateType) => {
        return {
            isAuth: state.auth.isAuth,
            id: state.auth.userId,
            captcha: state.auth.captcha
        }
    },
    (dispatch) => {
        return {
            LoginThunkCreator: (data: any) => {
                LoginThunkCreator(data)(dispatch)
            }
        }
    })
(LoginPage);