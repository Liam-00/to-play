import Link from 'next/link'
import style from './NavContainer__ProfileBar.module.css'

const NavContainer__ProfileBar = () => {
    return (
        <div className={`${style.ProfileBar__Body}`}>
            <div className={`${style.ProfileBar__TextCol}`}>
                <span className={`${style.ProfileBar__Text_NameTitle}`}>User Name</span>

                <div className={`${style.ProfileBar__TextRow}`}>
                    <span className={`${style.ProfileBar__Text_SmallLink}`}>user settings</span>
                    <span className={`${style.ProfileBar__Text_SmallLink}`}>logout</span>
                </div>
            </div>
            <div className={`${style.ProfileBar__Icon}`}></div>
        </div>
    )
}

export default NavContainer__ProfileBar