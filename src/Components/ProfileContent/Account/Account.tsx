// @ts-ignore
import classes from "./Account.module.css";
// @ts-ignore
import logo from './logo192.png'
// @ts-ignore
import {StatusWithHook} from "./Status/StatusWithHook.tsx";
// @ts-ignore
import {Contacts} from "./Contacts/Contacts.tsx";
import {ProfileDataType} from "../../../Utils/Types/Types";

interface PropsType {
    profile: ProfileDataType,
    owner: boolean,
    saveFileThunkCreator: (arg: any) => void,
    fetchStatusThunkCreator: (arg: any) => void,
    status: string
}

export const Account = (props: PropsType) => {
    return (<div className={classes.acc}>
            <br/>
            <br/>
            <div className={classes.contacts}>
                <Contacts contacts={props.profile.contacts}/>
            </div>
            <img className={classes.image} src={props.profile.photos.small ? props.profile.photos.small : logo}/>
            <br/>
            {
                props.owner && <input className={classes.file} type={'file'} onChange={(event) => {
                    if (event.target.files.length) {
                        props.saveFileThunkCreator(event.target.files[0]);
                    }
                }}/>
            }
            <div>Name: {props.profile.fullName}</div>
            <div>Looking job: {props.profile.lookingForAJob ? props.profile.lookingForAJobDescription : 'no'}</div>
            <div>About:{props.profile.aboutMe}</div>
            <StatusWithHook status={props.status} fetchStatusThunkCreator={props.fetchStatusThunkCreator}/>
        </div>
    )
}