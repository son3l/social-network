import {ReduxLoginForm} from "./LoginForm";
import {reqField} from "../../Utils/Validate/Validator";
import {Navigate} from "react-router-dom";

export const LoginPage = (props) => {
    const onSubmit = (formData) => {
        props.LoginThunkCreator({
            type: true,
            email: formData.login,
            password: formData.password,
            rememberMe: formData.rememberMe
        })
    }
    return (<>
        {
            props.isAuth ? <Navigate to={`/profile/${props.id}`}/> : <>
                <ReduxLoginForm onSubmit={onSubmit}/>
            </>
        }
    </>)

}