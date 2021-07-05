import React from 'react'

export default function Accordion({items}) {
    const renderedItems = items.map((item, index) => {
        return (
            <div key={index} className="p-4 bg-blue-100">
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-base">{item.description}</p>
            </div>
        )
    })
    return (
        <div className="rounded-md overflow-hidden">
            <h1>{renderedItems}</h1>
        </div>
    )
}
