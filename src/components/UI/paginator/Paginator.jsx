import React from "react"
import cs from "./Paginator.module.css"
import { getPagesArray } from "../../utils/pages"

const Paginator = ({ page, totalPages, changePage }) => {
    let pagesArray = getPagesArray(totalPages)
    return (
        <div className={cs.page__wrapper}>
            {pagesArray.map((pageGroup) =>
                <span
                    onClick={() => changePage(pageGroup)}
                    key={pageGroup}
                    className={page === pageGroup ? cs.page + " " + cs.page__current : cs.page}
                >
                    {pageGroup}
                </span>
            )}
        </div>
    )
}

export default Paginator