// @ts-ignore
import {User} from './User/User.tsx';
// @ts-ignore
import logo from './logo192.png';
// @ts-ignore
import classes from "./UserBar.module.css";
import * as React from "react";
interface propsType{
    users: Array<any>,
    follow: (id: number)=>void
    followProgress: boolean,
    followThunkCreator: (followed: boolean, id: number)=>void
}
export const UserBar: React.FC<propsType> = (props) => {
    return (
        <div className={classes.userBar}>
            {
                props.users.map((user) => {
                    return (<div className={classes.user}>
                            <User id={user.id} logo={user.photos.small ? user.photos.small : logo} name={user.name}
                                  about={user.about}
                                  followed={user.followed} followProgress={props.followProgress}
                                  follow={props.follow} followThunkCreator={props.followThunkCreator}/>
                            </div>
                    )
                })
            }
        </div>
    );
}