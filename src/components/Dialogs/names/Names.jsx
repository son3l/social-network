import classes from "./../Dialog.module.css";
import {NavLink} from "react-router-dom";

export const Names = (props) => {
    return (
        <NavLink className={navData => navData.isActive ? classes.active : classes.names} to={`/dialog/${props.id}`}>
            <div className={classes.names}>
                {props.name}
            </div>
        </NavLink>
    )
}