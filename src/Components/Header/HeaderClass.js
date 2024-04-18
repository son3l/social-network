import React from "react";
import {Header} from "./Header";


export class HeaderClass extends React.Component {

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