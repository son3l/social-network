import React from "react";
import {ProfileContent} from "./ProfileContent";
import {saveProfileThunkCreator} from "../../Redux/Reducers/ProfilePostReducer";

export class ProfileContentClass extends React.Component {

    getData() {
        this.props.getProfileThunkCreator(this.props.router.params.profileId ? this.props.router.params.profileId : this.props.id);
        this.props.fetchStatusThunkCreator({
            id: this.props.router.params.profileId ? this.props.router.params.profileId : this.props.id,
            action: 'get'
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.router.params.profileId !== this.props.router.params.profileId) {
            this.props.getProfileThunkCreator(this.props.id);
            this.props.fetchStatusThunkCreator({id: this.props.id, action: 'get'});
        }
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <ProfileContent {...this.props} saveProfileThunkCreator={this.props.saveProfileThunkCreator} saveFileThunkCreator={this.props.saveFileThunkCreator} owner={!this.props.router.params.profileId} status={this.props.status} profile={this.props.profile}
                            fetchStatusThunkCreator={this.props.fetchStatusThunkCreator}/>)
    }


}