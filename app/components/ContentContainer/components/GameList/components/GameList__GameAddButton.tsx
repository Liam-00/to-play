import style from './GameList__GameAddButton.module.css'
import buttonStyle from './GameList__GameAddButton.module.css'
import GameList__Card from './GameList__Card'


const GameList__GameAddButton = () => {
    return (
        <GameList__Card innerClass={`${buttonStyle.GameAddButton__Inner}`}>
                <span className={`Text__PrimaryInterface`}>ADD GAME!</span>
        </GameList__Card>
    )
}

export default GameList__GameAddButton