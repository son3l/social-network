import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../Utils/Validate/Components/Textarea";
import {maxLengthUser, reqField} from "../../Utils/Validate/Validator";

const lengthValid = maxLengthUser(30);
export const AddMessageFrom = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field validate={[reqField, lengthValid]} placeholder={'write message'} component={Textarea} name={'message'}></Field>
                <div>
                    <button>send</button>
                </div>
            </form>
        </div>)
}

export const ReduxFormMessageForm = reduxForm({form: 'addMessage'})(AddMessageFrom);