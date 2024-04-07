import React from "react";
import axios from "axios";
import {ProfileContent} from "./ProfileContent";

export class ProfileContentClass extends React.Component {

    getData() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.router.params.profileId}`).then((res) => {
            this.props.setProfile(res.data);
        })

    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <ProfileContent {...this.props} profile={this.props.profile}/>
        )
    }


}