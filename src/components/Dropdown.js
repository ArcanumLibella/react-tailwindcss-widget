import React, { useState, useEffect, useRef } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'

export default function Dropdown({selected, onSelectedChange, options}) {
    const [open, setOpen] = useState(false);
    const ref = useRef()

    useEffect(() => {
        const onBodyClick = (event) => {
          if (ref.current.contains(event.target)) {
            return;
          }
          setOpen(false);
        };
        document.body.addEventListener("click", onBodyClick, { capture: true });
     
        return () => {
          document.body.removeEventListener("click", onBodyClick, {
            capture: true,
          });
        };
      }, []);

    const renderedOptions = options.map(option => {
        if (option.value === selected.value) {
            return null;
        }
        return (
            <li 
                key={option.value}
                onClick={() => onSelectedChange(option)}
                className={`flex justify-between items-center text-grey-dark p-4 font-medium hover:bg-grey-light cursor-pointer
                hover:text-${option.value} 
                ${open ? '' : 'hidden'}
                `}
            >
                {option.label}
                <div className={`h-6 w-6 rou rounded-md bg-${option.value}`}></div>
            </li>
        )
    })

    return (
        <form ref={ref}>
            <fieldset>
                <label className="flex justify-between items-center p-4 pb-2 font-bold">
                    Select an option :
                </label>
                <ul 
                    onClick={() => setOpen(!open)}
                    className="dropdown-menu rounded-md border border-grey"
                >
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
