import React, { useState, useEffect } from 'react'
import Call from '../services/Call';

export default function Convert({selected, /* language, */ text}) {
    const [translation, setTranslation] = useState("")
    const [debouncedText, setDebouncedText] = useState(text)

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text)
        }, 1000)

        return () => {
            clearTimeout(timerId)
        }
    })

    useEffect(() => {
        const doTranslation = async () => {
            const response = await Call.postText(debouncedText, selected)
            setTranslation(response.data.translations[0].translatedText)
         }
        doTranslation()
    }, [selected, /* language, */ debouncedText])

    return (
        <div className="mt-8">
            <label className="block font-medium mb-2">
                Translation :
            </label>
            <div className="p-4 border border-grey rounded-md">
                {translation}
            </div>
        </div>
    )
}
