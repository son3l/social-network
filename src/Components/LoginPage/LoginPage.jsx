import {ReduxLoginForm} from "./LoginForm";

export const LoginPage = (props)=>{
    return(<>
        <h1>LOGIN</h1>
           <ReduxLoginForm onSubmit={onSubmit}/>
        </>)
}
export const onSubmit = (formData)=>{

}