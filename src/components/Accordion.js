import React, {Fragment, useState} from 'react'
import { ChevronDownIcon } from '@heroicons/react/outline'


export default function Accordion({items}) {
    const [activeIndex, setActiveIndex] = useState(null)

    const onTitleClick = (index) => {
        setActiveIndex(index)
        console.log('Title clicked ', activeIndex)
    }

    
    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : 'hidden'
        const rotate = index === activeIndex ? 'rotate-180' : 'rotate-0'

        return (
            <div key={index} className="p-4 bg-blue-100 border border-white">
                <div 
                    onClick={() => onTitleClick(index)}
                    className={`flex justify-between items-center `}
                >
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <ChevronDownIcon className={`h-5 w-5 text-blue-500 transform ${rotate}`}/>
                </div>
                <p className={`text-base my-4 ${active}`}>{item.description}</p>
            </div>
        )
    })
    return (
        <Fragment>
            <h2 className="mb-4 text-xl font-bold uppercase">Accordion</h2>
            <div className="rounded-lg overflow-hidden">{renderedItems}</div>
        </Fragment>
    )
}
