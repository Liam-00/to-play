import style from './NavContainer__NavBar.module.css'
import NavContainer__Button from './components/NavContainer__Button'

const NavContainer__Navbar = () => {
    return (
        <div className={style.Navbar_body}>
            <NavContainer__Button content='GAME LIST'/>
            <NavContainer__Button content='OTHER VIEWS'/>
            <NavContainer__Button content='SETTINGS'/>
        </div>
    )
}

export default NavContainer__Navbar