import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {AuthThunkCreator} from "../../Redux/Reducers/AuthReducer";


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