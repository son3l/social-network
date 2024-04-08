import classes from "../UserBar.module.css";

export const Pages = (props) => {
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