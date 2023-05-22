'use client'

import React from 'react'
import { useState } from 'react'
import style from './ProfileBar__ToggleMenu.module.css'



const ProfileBar__ToggleMenu = ({ children }: { children: React.ReactElement }) => {
    const [menuVisible, setMenuVisible] = useState(false)

    return (
        <>
            <div
                className={`${style.ToggleMenu__Body}`}
                onClick={() => { setMenuVisible(!menuVisible) }}
            >
                <div className={`${style.ToggleMenu__Label}`}>
                    <span>Menu</span>
                </div>
            </div>
            <div className={`${style.ToggleMenu__Menu} ${menuVisible ? "" : style.hidden}`}>
                {children}
            </div>
        </>
    )
}

export default ProfileBar__ToggleMenu