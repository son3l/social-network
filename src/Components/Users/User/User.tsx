// @ts-ignore
import classes from "./User.module.css";
import {NavLink} from "react-router-dom";
import * as React from "react";

interface propsType {
    id: number,
    logo: string,
    name: string,
    about: string,
    followProgress: boolean,
    followed: boolean,
    followThunkCreator: (followed: boolean, id: number) => void,
    follow: (id: number)=>void
}

export const User: React.FC<propsType> = (props) => {
    return (
        <div className={classes.user}>

            <NavLink to={`/profile/${props.id}`}>
                <img src={props.logo}/>
            </NavLink>
            <div>
                <p> Name: {props.name}</p>
                About: {props.about}
                <div className={classes.location}>Location: {'props.location.country'}, {'props.location.city'}</div>
            </div>
            <button disabled={props.followProgress} onClick={() => {
                props.followThunkCreator(props.followed, props.id)
            }}
            >{props.followed ? 'unfollow' : 'follow'}</button>

        </div>
    );
}