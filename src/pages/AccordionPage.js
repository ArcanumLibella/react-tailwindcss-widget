import React from 'react'
import {Accordion} from '../components'
import items from '../data/Items'

export default function AccordionPage() {
    return (
        <div>
            <h2 className="mb-4 text-xl font-bold uppercase">Accordion</h2>
            <Accordion items={items}/>
        </div>
    )
}
