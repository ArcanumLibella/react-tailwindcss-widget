import React, { useState } from 'react'
import {Dropdown} from '../components'

export default function Translator({selected, onSelectedChange, options}) {
    const [text, setText] = useState("")

    return (
        <div>
            <fieldset className="mb-4 ">
                <label className="block font-medium mb-2">
                    Enter text :
                </label>
                <input 
                    type="text" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                    placeholder="I love chocolate"
                    className="block w-full p-4 mb-4 border border-grey rounded-md font-medium placeholder-grey focus:border-rose-corail"
                />
            </fieldset>
            
            <Dropdown
                label="Select a language"
                selected={selected}
                onSelectedChange={onSelectedChange}
                options={options}
            />
        </div>
    )
}
