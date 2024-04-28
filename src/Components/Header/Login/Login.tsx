import {NavLink} from "react-router-dom";
// @ts-ignore
import classes from "../Header.module.css";

export const Login = ()=>{
    return(
        <div className={classes.login}>
            <NavLink to={'/login'} className={classes.text}>Sign In</NavLink>
        </div>
    )
}