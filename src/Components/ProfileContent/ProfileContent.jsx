import classes from './ProfileContent.module.css'
import {Account} from "./Account/Account";
import {PostsContainer} from "./Posts/PostsContainer";
import loading from "./loading.svg";
import React from "react";

export const ProfileContent = (props) => {
    if (!props.profile)
        return (<img className={classes.load} src={loading}/>)
    return (
        <div className={classes.content}>
            <Account saveFileThunkCreator={props.saveFileThunkCreator} owner={props.owner} profile={props.profile} status={props.status} fetchStatusThunkCreator={props.fetchStatusThunkCreator}/>
            <PostsContainer/>
        </div>
    )
}