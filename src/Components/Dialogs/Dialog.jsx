import classes from "./Dialog.module.css";
import {Messages} from "./messages/Messages";
import {Names} from "./names/Names";
import React from "react";
import {ReduxFormMessageForm} from "./AddMessageFrom";


export const Dialog = (props) => {
    const addNewMessage = (data)=>{
        props.addMessage(data.message);
    }
    return (<div className={classes.dialog}>
            <div>
                {
                    props.nameData.map((name) => {
                        return <Names name={name.name} id={name.id}/>
                    })
                }
            </div>
            <div>
                <div>
                    {
                        props.messageData.map((message) => {
                            return <Messages message={message.message}/>
                        })
                    }
                </div>
                <ReduxFormMessageForm onSubmit={addNewMessage}/>
            </div>

        </div>
    )
}