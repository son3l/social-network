import React from "react";
import {ProfileContent} from "./ProfileContent";

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