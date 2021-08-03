import React, { useState, useEffect } from 'react'
import Call from '../services/Call';

export default function Convert({selected, /* language, */ text}) {
    const [textTranslated, setTextTranslated] = useState("")

    useEffect(() => {
        async function postData() {
            const response = await Call.postText(text, selected)
            setTextTranslated(response.data.translations[0].translatedText)
         }
        postData()
    }, [selected, /* language, */ text])

    return (
        <div className="mt-8">
            <label className="block font-medium mb-2">
                Translation :
            </label>
            <div className="p-4 border border-grey rounded-md">
                {textTranslated}
            </div>
        </div>
    )
}
