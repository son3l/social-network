import * as React from "react";
interface PropsType{
    status: string,
    fetchStatusThunkCreator: (arg: any)=>void
}

export const StatusWithHook = React.memo((props: PropsType) => {

    let [mode, setMode] = React.useState(false);
    let [status, setStatus] = React.useState(props.status);
    React.useEffect(() => {
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