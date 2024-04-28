// @ts-ignore
import classes from "./Dialog.module.css";
import {Messages} from "./messages/Messages.tsx";
import {Names} from "./names/Names.tsx";
import * as React from "react";
import {ReduxFormMessageForm} from "./AddMessageFrom.tsx";

interface PropsType{
    addMessage: (message: string)=>void,
    nameData: Array<any>,
    messageData: Array<any>
}
export const Dialog = (props: PropsType) => {
    const addNewMessage = (data: any)=>{
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