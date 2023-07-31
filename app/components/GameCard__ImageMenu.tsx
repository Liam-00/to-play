'use client'

import style from './GameCard__ImageMenu.module.css'
import { useState } from 'react'


const GameCard__ImageMenu = ({ ImageURL }: { ImageURL: string }) => {
    let statusOptions = ['Completed', 'Playing', 'Unplayed']

    let [menuVisible, setMenuVisible] = useState(false)
    let [currentStatus, setCurrentStatus] = useState(statusOptions[1])

    const setStatusHandler = (status: string) => {
        setCurrentStatus(status)
    }


    return (
        <div
            className={`${style.ImageMenu__Wrapper}`}
            onClick={() => { setMenuVisible(!menuVisible) }}
        >
            <img src={ImageURL} alt="Image of game cover" className={`${style.ImageMenu__Image}`}></img>

            <div className={`${style.ImageMenu__MenuBody}`}>
                <span className={`${style.ImageMenu__StatusLabel} ${style['Label' + currentStatus]}`}>
                    {currentStatus}
                </span>

                <div className={`${style.ImageMenu__StatusSelector} ${menuVisible ? '' : style.hidden}`}>

                    <div className={`${style.ImageMenu__SelectionWrapper}`}>
                        {
                            statusOptions.map(val => {
                                return (
                                    <span
                                        className={`${style.ImageMenu__StatusOption} ${style[val]}`}
                                        onClick={() => { setStatusHandler(val) }}
                                    >
                                        {val}
                                    </span>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GameCard__ImageMenu