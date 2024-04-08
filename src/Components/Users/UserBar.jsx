import {User} from "./User/User";
import logo from './logo192.png'
import classes from "./UserBar.module.css";
import axios from "axios";
import {NavLink} from "react-router-dom";

export const UserBar = (props) => {
    return (
        <div className={classes.userBar}>
            {
                props.users.map((user) => {
                    return (<div className={classes.user}>
                            <User id={user.id} logo={user.photos.small ? user.photos.small : logo} name={user.name}
                                  about={user.about} location={user.location}
                                  followed={user.followed} followProgress={props.followProgress}
                                  follow={props.follow} followProgressF={props.followProgressF}/>
                            </div>
                    )
                })
            }
        </div>
    );
}