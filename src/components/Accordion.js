import React from 'react'

export default function Accordion({items}) {
    const renderedItems = items.map((item, index) => {
        return (
            <div key={index} className="p-4 bg-blue-100">
                <h3 className="">{item.title}</h3>
                <p className="">{item.description}</p>
            </div>
        )
    })
    return (
        <div>
            <h1>{renderedItems}</h1>
        </div>
    )
}
