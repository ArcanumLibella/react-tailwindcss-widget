import React from 'react'
import { Dropdown } from '../components'
import colors from "../data/Colors"

export default function DropdownPage() {
    return (
        <div>
            <h2 className="mb-4 text-xl font-bold uppercase">Dropdown Color</h2>
            <Dropdown colors={colors}/>
        </div>
    )
}
