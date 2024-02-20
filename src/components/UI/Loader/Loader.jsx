import React from "react";
import cs from "./Loader.module.css"

const Loader = () => {
    return (
        <div className={cs.wrappedLoader}>
            <div className={cs.loader}>
                
            </div>
        </div>
    )
}

export default Loader