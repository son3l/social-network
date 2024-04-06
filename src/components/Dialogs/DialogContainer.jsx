import classes from "./Dialog.module.css";
import {Messages} from "./messages/Messages";
import {Names} from "./names/Names";
import React from "react";

export const Dialog = (props) => {
    let ref = React.createRef();
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
                <div>
                    <textarea ref={ref} onChange={() => {
                        props.dispatch({type: 'typing-message', message: ref.current.value});
                    }} value={props.typingMessage}></textarea>
                    <div>
                        <button onClick={() => {
                            props.dispatch({type: 'add-message'})
                        }}>send
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}