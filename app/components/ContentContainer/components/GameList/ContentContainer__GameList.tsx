import React from "react"

import style from './ContentContainer__GameList.module.css'

const ContentContainer__GameList = ({children}: {children?: React.ReactElement[]} = {children: undefined}) => {
    return (
        <div className={`${style.ContentContainer__GameList_Body}`}>
            {children}
        </div>
    )
}

export default ContentContainer__GameList