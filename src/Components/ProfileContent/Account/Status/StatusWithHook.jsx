import React, {useEffect, useState} from "react";

export const StatusWithHook = React.memo((props) => {

    let [mode, setMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    return (
        <>
            {
                mode ? <div>
                    <input onChange={(e) => {
                        setStatus(e.currentTarget.value);
                    }} autoFocus={true} onBlur={() => {
                        setMode(!mode);
                        props.fetchStatusThunkCreator({action: 'put', status: status})
                    }} value={status}/>
                </div> : <div>
                <span onClick={() => {
                    setMode(!mode);
                }}>{props.status || '----'}</span>
                </div>
            }
        </>
    )
});