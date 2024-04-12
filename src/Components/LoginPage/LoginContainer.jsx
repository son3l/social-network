import {connect} from "react-redux";
import {LoginPage} from "./LoginPage";
import {LoginThunkCreator} from "../../Redux/Reducers/AuthReducer";

export const LoginContainer = connect(
    (state) => {
return{
isAuth: state.auth.isAuth
}
    },
    (dispatch) => {
        return {
            LoginThunkCreator: (data) => {
                LoginThunkCreator(data)(dispatch)
                }
        }
    })
(LoginPage);