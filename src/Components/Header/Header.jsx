import logo from "./logo192.png";
import classes from './Header.module.css';
import {Login} from "./Login/Login";
import {NavLink} from "react-router-dom";
import React from "react";

export const Header = (props) => {
let ref = React.createRef()
    let check = false;
    if (props.isAuth&&props.profile)
        return (
            <div className={classes.head}>
                <img src={logo}/>
                <div className={classes.profileBox}>
                    <div className={classes.profile}>
                    <img onClick={()=>{
                        if(check)
                        {ref.current.className = classes.dropdownDisable;
                        check = false;
                        } else {
                            ref.current.className = classes.dropdownActive;
                            check = true;
                        }
                        }} className={classes.image}
                         src={props.profile.photos.small ? props.profile.photos.small : logo}/>
                        <div>{props.profile.fullName}</div>

                    <div ref={ref} className={classes.dropdownDisable}>
                        <div className={classes.items}><NavLink to={`/profile/${props.id}`}>
                            to profile
                        </NavLink></div>
                        <div className={classes.items} onClick={() => {
                            check = false;
                            ref.current.className = classes.dropdownDisable;
                            props.LoginThunkCreator({type: false});
                        }}>logout
                        </div>
                    </div>
                </div>
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