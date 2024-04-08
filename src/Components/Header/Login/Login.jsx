import {NavLink} from "react-router-dom";
import classes from "../Header.module.css";

export const Login = (props)=>{
    return(
        <div className={classes.login}>
            <NavLink to={'/login'} className={classes.text}>Sign In</NavLink>
        </div>
    )
}