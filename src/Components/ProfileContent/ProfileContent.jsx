import classes from './ProfileContent.module.css'
import {Account} from "./Account/Account";
import {PostsContainer} from "./Posts/PostsContainer";
import loading from "./loading.svg";
import React, {useState} from "react";
import {RedactorForm} from "./Redactor/Redactor";

export const ProfileContent = (props) => {
    let [mode, setMode] = useState(false);
    const onSubmit = (formData)=>{
        props.saveProfileThunkCreator({...formData, userId: props.id});
    };
    if (!props.profile)
        return (<img className={classes.load} src={loading}/>)
    return (
        <div className={classes.content}>
            {
                mode?<RedactorForm onSubmit={onSubmit} setMode={setMode} profile={props.profile}/>:
                    <>
                        <button className={classes.change} onClick={() => {
                            setMode(true)
                        }}>change profile
                        </button>
                        <Account saveFileThunkCreator={props.saveFileThunkCreator} owner={props.owner}
                                 profile={props.profile}
                                 status={props.status} fetchStatusThunkCreator={props.fetchStatusThunkCreator}/>
                        <PostsContainer/>
                    </>
            }
        </div>
    )
}