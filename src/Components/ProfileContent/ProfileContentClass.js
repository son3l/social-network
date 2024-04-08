import React from "react";
import axios from "axios";
import {ProfileContent} from "./ProfileContent";
import {fetchProfile} from "../../Api/api";

export class ProfileContentClass extends React.Component {

    getData() {
        fetchProfile(this.props.router.params.profileId).then((res) => {
            this.props.setProfile(res);
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