import React from 'react'
import style from './ContentContainer.module.css'

let ContentContainer = ({ children }: { children?: React.ReactNode } = {children: undefined}) => {
    return (
        <div className={`${style.ContentContainer_Body}`}>
            {children}
        </div>
    )
}

export default ContentContainer