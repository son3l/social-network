// @ts-ignore
import classes from "./../Dialog.module.css";

interface PropsType{
    message: string
}
export const Messages = (props: PropsType) => {
    return (<div className={classes.messages}>
            <div> {props.message}</div>
        </div>
    )
}