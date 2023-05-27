import style from './SortingOptions__ToggleButton.module.css'
import { useState } from 'react'


const SortingOptions__ToggleButton = ({ modes }: { modes: string[] }) => {
    let [mode, setMode] = useState(false)

    return (
        <div
            className={`${style.ToggleButton__Body} ${mode ? style.selectLeft : style.selectRight}`}
            onClick={() => {
                setMode(!mode)
            }}
        >
            <span className={`${style.ToggleButton__Label}`}>
                {mode ? modes[0] : modes[1]}
            </span>
        </div>
    )
}

export default SortingOptions__ToggleButton