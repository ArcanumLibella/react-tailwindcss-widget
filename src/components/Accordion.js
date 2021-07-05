import React, {Fragment} from 'react'
import { ChevronDownIcon } from '@heroicons/react/outline'


export default function Accordion({items}) {
    const renderedItems = items.map((item, index) => {
        return (
            <div key={index} className="p-4 bg-blue-100 border border-white">
                <div className="flex justify-between items-center">
                    <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                    <ChevronDownIcon className="h-5 w-5 text-blue-500"/>
                </div>
                <p className="text-base">{item.description}</p>
            </div>
        )
    })
    return (
        <Fragment>
            <h2 className="mb-4 text-xl font-bold uppercase">Accordion</h2>
            <div className="accordion rounded-lg overflow-hidden">{renderedItems}</div>
        </Fragment>
    )
}
