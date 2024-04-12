import {Field, reduxForm} from "redux-form";
import React from "react";

const PostArea = (props) => {
    return (<form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newPost'} />
            </div>
            <button >Create</button>
        </form>
    )
}
export const ReduxFormPostArea = reduxForm({form: 'post'})(PostArea)