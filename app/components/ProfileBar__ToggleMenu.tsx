'use client'

import { useState } from 'react'
import style from './ProfileBar__ToggleMenu.module.css'


const ProfileBar__ToggleMenu = ({ children }: { children: React.ReactElement | React.ReactElement[] }) => {
    
    const [menuVisible, setMenuVisible] = useState(false)

    return (
        <>
            <div
            className={`${style.ToggleMenu__Body} ${menuVisible ? style.highlight : ""} border shadow hideOnBig`}
            onClick={() => { setMenuVisible(!menuVisible) }}
            >
                <span>Menu</span>
            </div>
            
            <div className={`${style.ToggleMenu__Menu} ${menuVisible ? "" : style.hidden} shadow`}>
                {children}
            </div>
        </>
    )
}

export default ProfileBar__ToggleMenu