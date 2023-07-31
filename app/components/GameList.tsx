import React from "react"

import style from './GameList.module.css'
import videogame_type from "@/app/types/videogame_type"
import GameList__GameCard from "@/app/components/GameList__GameCard"

const GameList = ({ children, gameList }: { children?: React.ReactElement | React.ReactElement[], gameList?: videogame_type[] } = { children: undefined, gameList: undefined }) => {
    return (
        <div className={`${style.GameList_Body}`}>
            {children}
            {
                gameList ?
                    gameList.map((val, i) => {
                        return <GameList__GameCard videogame={val} key={i} />
                    })
                    :
                    null
            }
        </div>
    )
}

export default GameList