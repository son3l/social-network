import {Field, reduxForm} from "redux-form";
import * as React from "react";
import {maxLengthUser, reqField} from "../../../Utils/Validate/Validator";
import {Textarea} from "../../../Utils/Validate/Components/Textarea";

const lengthValid = maxLengthUser(30);
interface PropsType{
    handleSubmit: ()=>void
}
const PostArea = (props: PropsType) => {
    return (<form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[reqField, lengthValid]} placeholder={'write some text'} component={Textarea} name={'newPost'}/>
            </div>
            <button>Create</button>
        </form>
    )
}
export const ReduxFormPostArea = reduxForm({form: 'post'})(PostArea)