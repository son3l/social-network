import {Field, reduxForm} from "redux-form";
import {Input} from "../../Utils/Validate/Components/Input";
import {reqField} from "../../Utils/Validate/Validator";
// @ts-ignore
import classes from "./Login.module.css";

interface PropsType{
    handleSubmit: ()=>void,
    error: string,
    captcha: string,
}
const LoginForm = (props:PropsType) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.form}>
            <h1>LOGIN</h1>
            <div className={classes.fields}>
                <Field validate={[reqField]} placeholder={'login'} component={Input}
                       name={'login'}/></div>
            <div className={classes.fields}>
                <Field validate={[reqField]} placeholder={'password'} component={Input}
                       name={'password'}
                       type={'password'}/></div>
            <div className={classes.fields}>
                <Field type={'checkbox'} component={Input} name={'rememberMe'}/> remember me
            </div>
            <div className={props.error ? classes.error : ''}>{props.error}</div>
            <br/>

            <div className={classes.fields}>
                <button className={classes.button}>sign in</button>
            </div>
            {props.captcha && <>
                <img src={props.captcha}/>
            <Field validate={[reqField]} component={Input}
                   name={'captcha'}/>
            </>}
        </form>
    )
}

export const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm);