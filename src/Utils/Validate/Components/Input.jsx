import classes from "./form.module.css";

export const Input = ({input, meta, ...props}) => {
    return (
        <div>
            <input {...props} {...input} className={meta.error && meta.touched ? classes.error : classes.valid}/>
            {
                meta.error && meta.touched ? <div className={classes.span}>{meta.error}</div> : <></>
            }
        </div>
    )
}