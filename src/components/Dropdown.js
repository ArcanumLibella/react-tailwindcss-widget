import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'

export default function Dropdown({colors}) {

    const renderedColors = colors.map(color => {
        return (
            <li key={color.value} className={`flex justify-between items-center text-grey-dark p-4 font-medium hover:bg-grey-light hover:text-${color.value} cursor-pointer`}>
                {color.label}
                <div className={`h-6 w-6 rou rounded-md bg-${color.value}`}></div>
            </li>
        )
    })
    return (
        <form>
            <fieldset className="">
                <label className="flex justify-between items-center mb-1 p-4 rounded-md border border-grey font-bold">
                    Select a color
                    <ChevronDownIcon className="h-6 w-6 mr-2" />
                </label>
                <ul className="dropdown-menu mt-4 rounded-md border border-grey">
                    {renderedColors}
                </ul>
            </fieldset>
        </form>
    )
}
