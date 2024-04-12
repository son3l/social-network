import {Field, reduxForm} from "redux-form";
import {Input} from "../../Utils/Validate/Components/Input";
import {reqField} from "../../Utils/Validate/Validator";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field validate={[reqField]} placeholder={'login'} component={Input} name={'login'}/></div>
            <div><Field validate={[reqField]} placeholder={'password'} component={Input} name={'password'} type={'password'}/></div>
            <div><Field type={'checkbox'} component={Input} name={'rememberMe'}/> remember me</div>
            <div>
                <button>sign in</button>
            </div>
        </form>
    )
}

export const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm);