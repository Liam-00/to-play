import Link from 'next/link'
import ProfileBar__ToggleMenu from './components/ProfileBar__ToggleMenu'
import NavContainer__Navbar from '../NavContainer__NavBar/NavContainer__NavBar'
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
            <ProfileBar__ToggleMenu>
                <NavContainer__Navbar />
            </ProfileBar__ToggleMenu>
        </div>
    )
}

export default NavContainer__ProfileBar