import classes from "./User.module.css";
import {NavLink} from "react-router-dom";

export const User = (props) => {
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

            <button onClick={() => {
                props.follow(props.id);

            }
            }
            >{props.followed ? 'unfollow' : 'follow'}</button>

        </div>

    );
}