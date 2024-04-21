import {ReduxLoginForm} from "./LoginForm";
import {Navigate} from "react-router-dom";

export const LoginPage = (props) => {
    const onSubmit = (formData) => {
        props.LoginThunkCreator({
            type: true,
            email: formData.login,
            password: formData.password,
            rememberMe: formData.rememberMe,
            captcha: formData.captcha
        })
    }
    return (<>
        {
            props.isAuth ? <Navigate to={`/profile/${props.id}`}/> : <>
                <ReduxLoginForm captcha={props.captcha} onSubmit={onSubmit}/>
            </>
        }
    </>)

}