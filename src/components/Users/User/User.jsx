import classes from "./User.module.css";
import {NavLink} from "react-router-dom";
import axios from "axios";

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
                if (props.followed) {
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
                        withCredentials: true,
                        headers: {'API-KEY':'43727460-6c20-4e37-879b-0c62e4861fde'}
                    }).then((res)=>{
                        if (res.data.resultCode === 0) {
                            props.follow(props.id);
                        }
                    })
                } else {
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
                        withCredentials: true,
                        headers: {'API-KEY':'43727460-6c20-4e37-879b-0c62e4861fde'}
                    }).then((res) => {
                        if (res.data.resultCode === 0) {
                            props.follow(props.id);
                        }
                    })
                }
            }
            }
            >{props.followed ? 'unfollow' : 'follow'}</button>

        </div>

    );
}