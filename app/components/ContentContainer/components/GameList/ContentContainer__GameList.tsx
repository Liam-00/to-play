import React from "react"

import style from './ContentContainer__GameList.module.css'
import videogame_type from "@/app/types/videogame_type"
import GameList__GameCard from "./components/GameCard/GameList__GameCard"

const ContentContainer__GameList = ({ children, gameList }: { children?: React.ReactElement | React.ReactElement[], gameList?: videogame_type[] } = { children: undefined, gameList: undefined }) => {
    return (
        <div className={`${style.ContentContainer__GameList_Body}`}>
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

export default ContentContainer__GameList