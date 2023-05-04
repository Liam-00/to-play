import style from './GameList__Card.module.css'

const GameList__Card = ({children, innerClass} : {children?: React.ReactElement[], innerClass?: string} = {}) => {
    return (
        <div className={`${style.GameList__Card_Body}`}>
            <div className={`${style.GameList__Card_Inner} ${innerClass}`}>
                {children}
            </div>
        </div>
    )
}

export default GameList__Card