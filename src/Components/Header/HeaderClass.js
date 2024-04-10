import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {AuthThunkCreator} from "../../Redux/Reducers/AuthReducer";


export class HeaderClass extends React.Component {

    getData() {
        this.props.AuthThunkCreator();
    }
    getUserProfile(id){
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`).then((res) => {
            this.props.setUser(res.data);
        })
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <Header {...this.props} profile={this.props.profile}/>
        )
    }
}