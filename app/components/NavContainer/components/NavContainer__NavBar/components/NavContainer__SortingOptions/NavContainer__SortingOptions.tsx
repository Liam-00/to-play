'use client'

import style from './NavContainer__SortingOptions.module.css'
import SortingOptions__ComboBox from './components/SortingOptions__ComboBox/SortingOptions__ComboBox'
import SortingOptions__ToggleButton from './components/SortingOptions__ToggleButton/SortingOptions__ToggleButton'

const NavContainer__SortingOptions = () => {
    return (
        <div className={`${style.SortingOptions__Body}`}>

            <SortingOptions__ComboBox options={["Date", "Alphabetically", "State"]} />
            <div className={`${style.SortingOptions__ToggleBody}`}>
                <SortingOptions__ToggleButton modes={['ASC', 'DESC']} />
                <SortingOptions__ToggleButton modes={['Labels', 'No Labels']} />

            </div>
        </div>
    )
}

export default NavContainer__SortingOptions