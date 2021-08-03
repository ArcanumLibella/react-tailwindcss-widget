import React from 'react'
import {Dropdown} from '../components'

export default function Translator({selected, onSelectedChange, options}) {
    return (
        <div>
            <Dropdown
                selected={selected}
                onSelectedChange={onSelectedChange}
                options={options}
            />
        </div>
    )
}
