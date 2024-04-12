
import {Dialog} from "./Dialog";
import {connect} from "react-redux";
import {authHoc} from "../Hoc/AuthRedirect";

export const DialogContainer = connect((state) => {
        return ({
            nameData: state.dialog.nameData,
            messageData: state.dialog.messageData,
            typingMessage: state.dialog.createMessage,
            isAuth: state.auth.isAuth
        })
    }, (dispatch) => {
        return (
            {
                addMessage: (message) => {
                    dispatch({type: 'add-message', message: message})
                }
            }
        )
    })(authHoc(Dialog));