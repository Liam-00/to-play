import React from 'react'
import style from './NavContainer.module.css'

const NavContainer = ({children}: {children: React.ReactElement[]}) => {
    return (
        <div className={style.NavContainer_Body}>
            {children}
        </div>
    )
}

export default NavContainer