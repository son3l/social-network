import classes from "./Dialog.module.css";
import {Messages} from "./messages/Messages";
import {Names} from "./names/Names";
import React from "react";
import {Dialog} from "./Dialog";
import {connect, Provider} from "react-redux";

export const DialogContainer = connect((state) => {
        return ({
            nameData: state.dialog.nameData,
            messageData: state.dialog.messageData,
            typingMessage: state.dialog.createMessage
        })
    }, (dispatch) => {
        return (
            {
                typeMessage: (message) => {
                    dispatch({type: 'typing-message', message: message.current.value})
                },
                addMessage: () => {
                    dispatch({type: 'add-message'})
                }
            }
        )
    })(Dialog);
        /* <Provider.Consumer>
             <Dialog typeMessage={(message) => {
                 store.dispatch({type: 'typing-message', message: message.current.value});
             }} addMessage={() => {
                 store.dispatch({type: 'add-message'})
             }} nameData={store.getState().dialog.nameData} messageData={store.getState().dialog.messageData}
                     typingMessage={store.getState().dialog.createMessage}/>
         </Provider.Consumer>*/
