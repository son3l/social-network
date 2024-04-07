import classes from "./Posts.module.css";

export const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src={props.image}/>
            <p>{props.message}</p>
        </div>
    )
}
