import classes from './NavBar.module.css'
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}><NavLink
                className={navData => navData.isActive ? classes.active : classes.item}
                to={"/profile"}>Profile</NavLink></div>
            <div className={classes.item}><NavLink
                className={navData => navData.isActive ? classes.active : classes.item}
                to={'/dialog'}> Messages</NavLink></div>
            <div className={classes.item}><NavLink
                className={navData => navData.isActive ? classes.active : classes.item}
                to={'/users'}> Users</NavLink></div>
            <div className={classes.item}><a> News</a></div>
            <div className={classes.item}><a> Music</a></div>
        </nav>
    )
}