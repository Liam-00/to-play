import GameList__Card from '../shared/GameList__Card'
import GameCard__InfoBlock from './components/InfoBlock/GameCard__InfoBlock'
import GameCard__Genre from './components/Genre/GameCard__Genre'

import videogame_type from '@/app/types/videogame_type'

import Image from 'next/image'
import style from './GameList__GameCard.module.css'

import pic from '@/devTestingData/Image_Test.png'
import { isPropertyAccessChain } from 'typescript'

const GameList__GameCard = ({ videogame }: { videogame: videogame_type }) => {
    return (
        <GameList__Card innerClass={`${style.GameCard__Inner}`}>


            <img src={videogame.imageURL} alt="Image of game cover" className={`${style.GameCard__Image}`}></img>



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
        </GameList__Card>
    )
}

export default GameList__GameCard