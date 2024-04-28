// @ts-ignore
import classes from "../UserBar.module.css";
import * as React from "react";

interface propsType{
    pages: Array<number>,
    currentPage: number,
    updatePages: (page: number)=>void
}
export const Pages: React.FC<propsType> = (props) => {
    return (

        props.pages.map((page) => {
            if (page >= props.currentPage - 10 && page <= props.currentPage + 10)
                return <span
                    onClick={() => {
                        props.updatePages(page)
                    }}
                    className={page === props.currentPage ? classes.active : classes.page}>{page}</span>
        })

    )
}