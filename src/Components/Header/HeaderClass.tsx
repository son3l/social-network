import * as React from "react";
// @ts-ignore
import {Header} from "./Header.tsx";
import {ProfileDataType} from "../../Utils/Types/Types";

interface PropsType{
    AuthThunkCreator: ()=>void,
    profile: ProfileDataType,
    LoginThunkCreator: ()=>void
}

export class HeaderClass extends React.Component<PropsType> {

    getData() {
        this.props.AuthThunkCreator();
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <Header {...this.props} profile={this.props.profile} LoginThunkCreator={this.props.LoginThunkCreator}/>
        )
    }
}