import style from './GameCard__Genre.module.css'

const GameCard__Genre = ({ label, color }: { label: string, color: string }) => {
    return (
        <span
            style={{ backgroundColor: color }}
            className={`${style.Genre__Body}`}
        >
            {label}
        </span >
    )
}

export default GameCard__Genre