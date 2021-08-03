import React, {useState} from 'react'
import { Dropdown } from '../components'
import options from "../data/Colors"

export default function DropdownPage() {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <div className="flex flex-col md:flex-row md:justify-between items-center mb-4 ">
                <h2 className="text-xl font-bold uppercase mb-2 md:mb-0">Dropdown Color</h2>
                <button 
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="p-2 text-black rounded-md shadow-md bg-rose-light hover:bg-rose active:bg-rose-corail cursor-pointer transition-all duration-300"
                >
                    Toggle dropdown
                </button>
            </div>
            {showDropdown ?
                <Dropdown 
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}
                />
             : null
            }
        </div>
    )
}
