import GameList__Card from './GameList__Card'
import Image from 'next/image'
import style from './GameList__GameCard.module.css'

import pic from '@/devTestingData/Image_Test.png'

const GameList__GameCard = () => {
    return (
        <GameList__Card innerClass={`${style.GameCard__Inner}`}>
            
            <Image src={pic} alt="Image of game cover" className={`${style.GameCard__Image}`}></Image>
            <div className={`${style.GameCard__InfoColumn}`}>
                <span className={`${style.GameCard__TitleText}`}>The Legend of Zelda: Tears of the Kingdom</span>
                <span>
                    <span className={`${style.GameCard__Genre}`}>RPG</span>
                    <span className={`${style.GameCard__Genre}`}>Open World</span>
                </span>
                
                <div className={`${style.GameCard__InfoFields}`}>
                    <div className={`${style.GameCard__Info_Block}`}>
                        <span className={`${style.GameCard__Info_Label}`}>Publisher:</span>
                        <span className={`${style.GameCard__Info_Content}`}>Nintendo</span>
                    </div>
                    <div className={`${style.GameCard__Info_Block}`}>
                        <span className={`${style.GameCard__Info_Label}`}>Studio:</span>
                        <span className={`${style.GameCard__Info_Content}`}>Nintendo EPD Production Group No. 3</span>
                    </div>
                    
                    <div className={`${style.GameCard__Info_Block}`}>
                        <span className={`${style.GameCard__Info_Label}`}>Description:</span>
                        <p className={`${style.GameCard__Info_Content}`}>
                            The Legend of Zelda: Tears of the Kingdom is the sequel to The Legend of Zelda: Breath of the Wild. The setting for Link’s adventure has been expanded to include the skies above the vast lands of Hyrule.
                        </p>
                    </div>
                </div>
                
            </div>
        </GameList__Card>
    )
}

export default GameList__GameCard