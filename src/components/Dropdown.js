import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'

export default function Dropdown({selected, onSelectedChange, options}) {

    const renderedOptions = options.map(option => {
        return (
            <li 
                key={option.value}
                onClick={() => onSelectedChange(option)}
                className={`flex justify-between items-center text-grey-dark p-4 font-medium hover:bg-grey-light hover:text-${option.value} cursor-pointer`}
            >
                {option.label}
                <div className={`h-6 w-6 rou rounded-md bg-${option.value}`}></div>
            </li>
        )
    })
    return (
        <form>
            <fieldset className="">
                <label className="flex justify-between items-center mb-1 p-4 rounded-md border border-grey font-bold">
                    Select a option
                    <ChevronDownIcon className="h-6 w-6 mr-2" />
                </label>
                <ul className="dropdown-menu mt-4 rounded-md border border-grey">
                    <li className="flex justify-between items-center text-grey-dark p-4 font-medium cursor-pointer">
                        {selected.label}
                        <div className={`h-6 w-6 rou rounded-md bg-${selected.value}`}></div>
                    </li>
                    {renderedOptions}
                </ul>
            </fieldset>
        </form>
    )
}
