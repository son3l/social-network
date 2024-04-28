import {reqField} from "../../../Utils/Validate/Validator";
import {Input} from "../../../Utils/Validate/Components/Input";
import {Field, reduxForm} from "redux-form";
// @ts-ignore
import classes from "./Redactor.module.css";
import {ProfileDataType} from "../../../Utils/Types/Types";
interface PropsType{
    profile: ProfileDataType,
    error: Array<any>,
    handleSubmit: ()=>void,
    editProfile: ()=>void
}

const Redactor = (props: PropsType) => {
    debugger
    return (<>
        <form onSubmit={props.handleSubmit}>
            <div className={classes.form}>
                <div className={classes.modules}>Profile info</div>
                <span>Name</span> <Field className={classes.fields} validate={[reqField]}
                                         placeholder={props.profile.fullName} component={Input}
                                         name={'fullName'}/>
                <span>Looking for a job</span><Field className={classes.fields} validate={[reqField]}
                                                     placeholder={props.profile.lookingForAJob} component={Input}
                                                     type={'checkbox'}
                                                     name={'lookingForAJob'}/>
                <span>Looking for a job description</span><Field className={classes.fields} validate={[reqField]}
                                                                 placeholder={props.profile.lookingForAJobDescription}
                                                                 component={Input}
                                                                 name={'lookingForAJobDescription'}/>
                <span>About me</span><Field className={classes.fields} validate={[reqField]}
                                            placeholder={props.profile.aboutMe} component={Input}
                                            name={'aboutMe'}/>
            </div>
            <div className={classes.form}>
                <div className={classes.modules}>Contacts</div>
                <span>Github</span><Field className={classes.fields} validate={[reqField]}
                                          placeholder={props.profile.contacts.github} component={Input}
                                          name={'github'}/>
                <span>Vk</span><Field className={classes.fields} validate={[reqField]}
                                      placeholder={props.profile.contacts.vk} component={Input}
                                      name={'vk'}/>
                <span>Facebook</span><Field className={classes.fields} validate={[reqField]}
                                            placeholder={props.profile.contacts.facebook} component={Input}
                                            name={'facebook'}/>
                <span>Instagram</span><Field className={classes.fields} validate={[reqField]}
                                             placeholder={props.profile.contacts.instagram} component={Input}
                                             name={'instagram'}/>
                <span>Twitter</span><Field className={classes.fields} validate={[reqField]}
                                           placeholder={props.profile.contacts.twitter} component={Input}
                                           name={'twitter'}/>
                <span>Your website</span><Field className={classes.fields} validate={[reqField]}
                                                placeholder={props.profile.contacts.website} component={Input}
                                                name={'website'}/>
                <span>Youtube</span><Field className={classes.fields} validate={[reqField]}
                                           placeholder={props.profile.contacts.youtube} component={Input}
                                           name={'youtube'}/>
                <span>Your main link</span><Field className={classes.fields} validate={[reqField]}
                                                  placeholder={props.profile.contacts.mainLink} component={Input}
                                                  name={'mainLink'}/>
            </div>
            <button className={classes.button}>save</button>
        </form>
        <div className={props.error ? classes.error : ''}>
            {props.error ?
                props.error.map((element) => {
                    return <div>{element}</div>
                }) : <></>}</div>
        <button className={classes.button} onClick={() => {
            props.editProfile();
        }}>cancel
        </button>
    </>)
}
export const RedactorForm = reduxForm({form: 'changeProfile'})(Redactor)