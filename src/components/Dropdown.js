import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'

export default function Dropdown({selected, onSelectedChange, options}) {

    const renderedOptions = options.map(option => {
        if (option.value === selected.value) {
            return null;
        }
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
                <label className="flex justify-between items-center p-4 pb-2 font-bold">
                    Select an option :
                </label>
                <ul className="dropdown-menu rounded-md border border-grey">
                    <li className={`flex justify-between items-center p-4 font-medium cursor-pointer text-${selected.value} border border-grey`}>
                        {selected.label}
                        <div className="flex justify-between items-center">
                            <ChevronDownIcon className="h-6 w-6" />
                        </div>
                    </li>
                    {renderedOptions}
                </ul>
            </fieldset>
        </form>
    )
}
