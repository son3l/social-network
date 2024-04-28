// @ts-ignore
import classes from "./Posts.module.css";

interface PropsType {
    image: string,
    message: string
}

export const Post = (props: PropsType) => {
    return (
        <div className={classes.item}>
            <img src={props.image}/>
            <p>{props.message}</p>
        </div>
    )
}
