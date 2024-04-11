import classes from "./Account.module.css";
import logo from './logo192.png'
import {Status} from "./Status/Status";

export const Account = (props) => {
    return (<div className={classes.acc}>
            <img className={classes.image} src={props.profile.photos.small ? props.profile.photos.small : logo}/>
            <div>Name: {props.profile.fullName}</div>
            <div>Looking job: {props.profile.lookingForAJob ? props.profile.lookingForAJobDescription : 'no'}</div>
            <div>About:{props.profile.aboutMe}</div>
            <Status status={props.status} fetchStatusThunkCreator={props.fetchStatusThunkCreator}/>
        </div>
    )
}