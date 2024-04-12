import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'login'} component={'input'} name={'login'}/></div>
            <div><Field placeholder={'password'} component={'input'} name={'password'}/></div>
            <div><Field type={'checkbox'} component={'input'} name={'rememberMe'}/> remember me</div>
            <div>
                <button>sign in</button>
            </div>
        </form>
    )
}

export const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm);