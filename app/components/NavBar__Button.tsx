import style from './NavBar__Button.module.css'

const NavBar__Button = ({ content }: { content: string }) => {
    return (
        <div className={`${style.Button__Body} Text__PrimaryInterface`}>
            <span className={`${style.Button__Text}`}>{content}</span>
        </div>
    )
}

export default NavBar__Button