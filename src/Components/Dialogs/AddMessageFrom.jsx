import React from "react";
import {Field, reduxForm} from "redux-form";

export const AddMessageFrom = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field component={'textarea'} name={'message'}></Field>
                <div>
                    <button>send</button>
                </div>
            </form>
        </div>)
}

export const ReduxFormMessageForm = reduxForm({form: 'addMessage'})(AddMessageFrom);