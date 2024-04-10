import React from "react";
import {Navigate} from "react-router-dom";

export const authHoc = (Component)=>{
    return class Wrapper extends React.Component{
        render() {
            if(this.props.isAuth)
            return <Component {...this.props}/>
            return <Navigate to={'/login'}/>
        }
    }
}