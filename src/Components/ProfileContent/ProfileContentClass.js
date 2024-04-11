import React from "react";
import axios from "axios";
import {ProfileContent} from "./ProfileContent";
import {fetchProfile} from "../../Api/api";
import {getProfileThunkCreator} from "../../Redux/Reducers/ProfilePostReducer";
import {Navigate} from "react-router-dom";
import {AuthHOC} from "../../Redux/Reducers/AuthReducer";

export class ProfileContentClass extends React.Component {

    getData() {
        this.props.getProfileThunkCreator(this.props.router.params.profileId);
    }

    componentDidMount() {
        this.getData();
    }

    render() {
            return(
            <ProfileContent {...this.props} profile={this.props.profile}/>)
    }


}