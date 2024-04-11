import React from "react";
import axios from "axios";
import {ProfileContent} from "./ProfileContent";
import {fetchProfile, fetchStatus} from "../../Api/api";
import {getProfileThunkCreator} from "../../Redux/Reducers/ProfilePostReducer";
import {Navigate} from "react-router-dom";
import {AuthHOC} from "../../Redux/Reducers/AuthReducer";

export class ProfileContentClass extends React.Component {

    getData() {
        this.props.getProfileThunkCreator(this.props.router.params.profileId);
        this.props.fetchStatusThunkCreator({id:this.props.router.params.profileId, action:'get'});
    }

    componentDidMount() {
        this.getData();
    }

    render() {
            return(
            <ProfileContent {...this.props} status={this.props.status} profile={this.props.profile} fetchStatusThunkCreator={this.props.fetchStatusThunkCreator}/>)
    }


}