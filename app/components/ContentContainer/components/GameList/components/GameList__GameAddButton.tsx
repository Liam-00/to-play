import style from './GameList__GameAddButton.module.css'

const GameList__GameAddButton = () => {
    return (
        <div className={`${style.GameAddButton__Body}`}>
            <div className={`${style.GameAddButton__Inner}`}>
                <span className={`Text__PrimaryInterface`}>ADD GAME!</span>
            </div>
        </div>
    )
}

export default GameList__GameAddButton