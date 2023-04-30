import style from './NavContainer__Button.module.css'

const NavContainer__Button = ({content}: {content: string}) => {
    return (
        <div className={`${style.NavContainer__button_body} Text__PrimaryInterface`}>
            <span>{content}</span>
        </div>
    )
}

export default NavContainer__Button