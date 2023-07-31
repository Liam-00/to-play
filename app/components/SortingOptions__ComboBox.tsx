'use client'

import style from './SortingOptions__ComboBox.module.css'
import { useState, useEffect, useRef } from 'react'

const SortingOptions__ComboBox = ({ options }: { options: string[] }) => {

    let [currentValue, setCurrentValue] = useState(options[0]);
    let [menuOpen, setMenuOpen] = useState(false);
    let menuNode = useRef<any>(null)

    const handleSelect = (selection: string) => {
        setCurrentValue(selection);
    }

    useEffect(() => {
        let closeMenu = (e: Event) => {
            if (menuOpen && menuNode.current && !menuNode.current.contains(e.target)) {
                setMenuOpen(false);
            }
        }

        document.addEventListener('click', closeMenu)
        return () => { document.removeEventListener('click', closeMenu) }
    }, [menuOpen])

    return (
        <div
            className={`${style.ComboBox__Body}`}
            onClick={() => setMenuOpen(!menuOpen)}
        >
            <span className={`${style.ComboBox__Label}`}>{currentValue}</span>
            <span className={`${style.ComboBox__DropIcon}`}>V</span>

            <div className={`${style.ComboBox__OptionsList} ${menuOpen ? "" : style.hidden} shadow`} ref={menuNode}>
                {options.map((val, i) => {
                    return (
                        <SortingOptions__ComboBox_Option label={val} clickHandler={handleSelect} key={i} />
                    )
                })}
            </div>

        </div>
    )
}

const SortingOptions__ComboBox_Option = ({ label, clickHandler }: { label: string, clickHandler: any }) => {
    return (
        <div
            className={`${style.ComboBox_Option_Body}`}
            onClick={() => { clickHandler(label) }}>
            <span className={`${style.ComboBox_Option_Label}`}>{label}</span>
        </div>
    )
}

export default SortingOptions__ComboBox