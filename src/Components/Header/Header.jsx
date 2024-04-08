import logo from "./logo192.png";
import classes from './Header.module.css';
import {Login} from "./Login/Login";
import {NavLink} from "react-router-dom";

export const Header = (props) => {

    if (props.isAuth&&props.profile)
        return (
            <div className={classes.head}>
                <img src={logo}/>
                <div className={classes.profile}>
                    <NavLink to={`/profile/${props.id}`}>
                        <img className={classes.image}
                         src={props.profile.photos.small ? props.profile.photos.small : logo}/>
                    </NavLink>
                    <div>{props.profile.fullName}</div>
                </div>
            </div>
        );
    return (
        <div className={classes.head}>
            <img src={logo}/>
            <Login/>
        </div>
    )
}