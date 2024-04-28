import * as React from "react";
import {Navigate} from "react-router-dom";
import {JSX} from "react";

interface propsType{
    users: Array<any>,
    pageSize: number,
    totalCount: number,
    currentPage: number,
    isFetching: boolean,
    followProgress: boolean,
    isAuth: boolean,
    follow: (id: number)=>void,
    followThunkCreator: (followed: boolean, id: number)=>void,
    getUsersThunkCreator: (page: number, count: number)=>void,
    setPage: (page: number)=>void
}
export const authHoc = (Component: any)=>{
    return class Wrapper extends React.Component<propsType>{
        render() {
            if(this.props.isAuth)
            return <Component {...this.props}/>
            return <Navigate to={'/login'}/>
        }
    }
}