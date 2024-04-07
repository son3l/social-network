import classes from "./../Dialog.module.css";

export const Messages = (props) => {
    return (<div className={classes.messages}>
            <div> {props.message}</div>
        </div>
    )
}