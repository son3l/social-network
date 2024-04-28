import * as React from "react";
// @ts-ignore
import {ProfileContent} from "./ProfileContent.tsx";
import {ProfileDataType} from "../../Utils/Types/Types";

interface PropsType {
    router: any,
    getProfileThunkCreator: (arg: any) => void,
    fetchStatusThunkCreator: (arg: any) => void,
    profile: ProfileDataType,
    isAuth: boolean,
    status: string,
    id: number,
    saveProfile: boolean
    saveProfileThunkCreator: (arg: any) => void,
    editProfile: () => void,
    saveFileThunkCreator: (arg: any) => void
}

export class ProfileContentClass extends React.Component<PropsType> {

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
            <ProfileContent saveProfile={this.props.saveProfile}
                            id={this.props.id}
                            isAuth={this.props.isAuth}
                            editProfile={this.props.editProfile}
                            saveProfileThunkCreator={this.props.saveProfileThunkCreator}
                            saveFileThunkCreator={this.props.saveFileThunkCreator}
                            owner={!this.props.router.params.profileId}
                            status={this.props.status}
                            profile={this.props.profile}
                            fetchStatusThunkCreator={this.props.fetchStatusThunkCreator}
            />)
    }
}