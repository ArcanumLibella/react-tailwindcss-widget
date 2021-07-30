import React from 'react'
import {Accordion} from '../components'

export default function AccordionPage() {
    const items = [
        {
          title: 'Titre 1',
          description: 'Description 1'
        },
        {
          title: 'Titre 2',
          description: 'Description 2'
        },
        {
          title: 'Titre 3',
          description: 'Description 3'
        }
    ]

    return (
        <div>
            <h2 className="mb-4 text-xl font-bold uppercase">Accordion</h2>
            <Accordion items={items}/>
        </div>
    )
}
