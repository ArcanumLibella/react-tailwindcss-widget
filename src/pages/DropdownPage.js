import React, {useState} from 'react'
import { Dropdown } from '../components'
import options from "../data/Colors"

export default function DropdownPage() {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <h2 className="mb-4 text-xl font-bold uppercase">Dropdown Color</h2>
            <Dropdown 
                selected={selected}
                onSelectedChange={setSelected}
                options={options}
            />
        </div>
    )
}
