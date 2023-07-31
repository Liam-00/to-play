'use client'

import style from './SortingOptions.module.css'
import SortingOptions__ComboBox from '@/app/components/SortingOptions__ComboBox'
import SortingOptions__ToggleButton from '@/app/components/SortingOptions__ToggleButton'

const SortingOptions = ({classNames}: {classNames?: string}) => {
    return (
        <div className={`${classNames} ${style.SortingOptions__Body} border shadow`}>

            <SortingOptions__ComboBox options={["Date", "Alphabetically", "State"]} />
            <div className={`${style.SortingOptions__ToggleBody}`}>
                <SortingOptions__ToggleButton modes={['ASC', 'DESC']} />
                <SortingOptions__ToggleButton modes={['Labels', 'No Labels']} />

            </div>
        </div>
    )
}

export default SortingOptions