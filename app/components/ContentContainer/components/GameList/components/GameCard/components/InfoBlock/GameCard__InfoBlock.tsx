import style from './GameCard__InfoBlock.module.css'

const GameCard__InfoBlock = ({ label, content }: { label: string, content: string }) => {
    return (
        <div className={`${style.InfoBlock__Body}`}>
            <span className={`${style.InfoBlock__Label}`}>
                {label}
            </span>
            <span className={`${style.InfoBlock__Content}`}>
                {content}
            </span>
        </div>
    )
}

export default GameCard__InfoBlock