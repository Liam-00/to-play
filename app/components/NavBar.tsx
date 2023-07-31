import style from './NavBar.module.css'
import NavBar__Button from '@/app/components/NavBar__Button'

const NavBar = ({classNames}: {classNames?:string}) => {
    return (
        <div className={`${classNames} ${style.Navbar_body} border shadow`}>
            <NavBar__Button content='GAME LIST' />
            <div className={`${style.NavContainer__button_divider}`}></div>
            <NavBar__Button content='OTHER VIEWS' />
            <div className={`${style.NavContainer__button_divider}`}></div>
            <NavBar__Button content='SETTINGS' />
        </div>
    )
}

export default NavBar