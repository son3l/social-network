import {ReduxLoginForm} from "./LoginForm.tsx";
import {Navigate} from "react-router-dom";

interface PropsType {
    captcha: string,
    id: number,
    LoginThunkCreator: (arg: any) => void,
    isAuth: boolean
}

export const LoginPage = (props: PropsType) => {
    const onSubmit = (formData: any) => {
        props.LoginThunkCreator({
            type: true,
            email: formData.login,
            password: formData.password,
            rememberMe: formData.rememberMe,
            captcha: formData.captcha,
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