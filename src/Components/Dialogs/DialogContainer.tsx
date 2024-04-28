
import {Dialog} from "./Dialog.tsx";
import {connect} from "react-redux";
// @ts-ignore
import {authHoc} from "../Hoc/AuthRedirect.tsx";
import {stateType} from "../../Redux/ReduxStore";

export const DialogContainer = connect((state: stateType) => {
        return ({
            nameData: state.dialog.nameData,
            messageData: state.dialog.messageData,
            typingMessage: state.dialog.createMessage,
            isAuth: state.auth.isAuth
        })
    }, (dispatch) => {
        return (
            {
                addMessage: (message: string) => {
                    dispatch({type: 'add-message', message: message})
                }
            }
        )
    })(authHoc(Dialog));