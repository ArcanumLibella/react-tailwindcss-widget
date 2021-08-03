import React, { useState } from 'react'
import {Translator} from '../components'
import options from "../data/Languages"

export default function TranslatePage() {
    const [language, setLanguage] = useState(options[0]);

    return (
        <div>
            <h2 className="mb-4 text-xl font-bold uppercase">Translate Widget</h2>
            <Translator 
                selected={language}
                onSelectedChange={setLanguage}
                options={options}
            />
        </div>
    )
}
