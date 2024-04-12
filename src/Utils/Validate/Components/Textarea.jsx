import classes from "./form.module.css";
export const Textarea = ({input,meta,...props})=>{
    return(
        <div >
            <textarea {...input} {...props} className={meta.error&&meta.touched?classes.error:classes.valid}/>
            {
              meta.error&&meta.touched?<div className={classes.span}>{meta.error}</div>:<></>
            }
        </div>
    )
}