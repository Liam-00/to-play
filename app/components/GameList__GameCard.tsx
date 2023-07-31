import GameList__Card from '@/app/components/GameList__Card'
import GameCard__InfoBlock from '@/app/components/GameCard__InfoBlock'
import GameCard__Genre from '@/app/components/GameCard__Genre'
import GameCard__ImageMenu from '@/app/components/GameCard__ImageMenu'

import videogame_type from '@/app/types/videogame_type'

import style from './GameList__GameCard.module.css'


const GameList__GameCard = ({ videogame }: { videogame: videogame_type }) => {
    return (

        <div className={`${style.Card__Body}`}>
            <div className={`${style.Card__Inner}`}>
                <GameCard__ImageMenu ImageURL={videogame.imageURL} />

                <div className={`${style.GameCard__InfoColumn}`}>
                    
                    <span className={`${style.GameCard__TitleText}`}>
                        {videogame.title}
                    </span>

                    <span className={`${style.GameCard_GenreBlock}`}>
                        {
                            videogame.genreList ?
                                videogame.genreList.map((val, i) => {
                                    return <GameCard__Genre label={val} key={i} color="cyan" />
                                }) : null
                        }
                    </span>

                    <div className={`${style.GameCard__InfoField}`}>
                        {
                            videogame.info ?
                                videogame.info.map((val, i) => {
                                    return <GameCard__InfoBlock label={val.label} content={val.content} key={i} />
                                }) : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameList__GameCard