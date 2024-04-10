import classes from "./Dialog.module.css";
import {Messages} from "./messages/Messages";
import {Names} from "./names/Names";
import React from "react";
import {Navigate} from "react-router-dom";

export const Dialog = (props) => {
    let ref = React.createRef();
    if(props.isAuth){
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
                    <textarea ref={ref} onChange={()=>{props.typeMessage(ref)}} value={props.typingMessage}></textarea>
                    <div>
                        <button onClick={()=>{props.addMessage()}}>send
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
    }else
    {
        return (<Navigate to={'/login'}/>)
    }
}