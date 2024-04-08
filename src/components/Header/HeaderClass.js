import React from "react";
import {Header} from "./Header";
import axios from "axios";


export class HeaderClass extends React.Component {

    getData() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then((res) => {
                if (res.data.resultCode === 0){
                    this.getUserProfile(res.data.data.id)

                    this.props.setAuth(res.data.data.id, res.data.data.email, res.data.data.login)}
            })
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