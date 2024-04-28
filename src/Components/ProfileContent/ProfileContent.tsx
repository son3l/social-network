// @ts-ignore
import classes from './ProfileContent.module.css'
// @ts-ignore
import {Account} from "./Account/Account.tsx";
// @ts-ignore
import {PostsContainer} from "./Posts/PostsContainer.tsx";
// @ts-ignore
import loading from "./loading.svg";
import * as React from "react";
// @ts-ignore
import {RedactorForm} from "./Redactor/Redactor.tsx";
import {ProfileDataType} from "../../Utils/Types/Types";

interface PropsType {
    profile: ProfileDataType,
    isAuth: boolean,
    status: string,
    id: number,
    saveProfile: boolean,
    saveProfileThunkCreator: (arg: any) => void,
    editProfile: () => void,
    saveFileThunkCreator: (arg: any) => void,
    owner: boolean,
    fetchStatusThunkCreator: (arg: any) => void
}

export const ProfileContent = (props: PropsType) => {
    const onSubmit = (formData: any) => {
        props.saveProfileThunkCreator({...formData, userId: props.id});
    };
    if (!props.profile)
        return (<img className={classes.load} src={loading}/>)
    return (
        <div className={classes.content}>
            {
                props.saveProfile ?
                    <RedactorForm initialValues={props.profile} onSubmit={onSubmit} editProfile={props.editProfile}
                                  profile={props.profile}/> :
                    <>
                        <button className={classes.change} onClick={() => {
                            props.editProfile();
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