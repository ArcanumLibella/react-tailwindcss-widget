import React, { useState, useEffect } from 'react'

export default function Convert({selected, /* language, */ text}) {
    
    useEffect(() => {
        console.log(`language = `, selected)

    }, [selected, /* language, */ text])

    return (
        <div className="mt-8">
            <label className="block font-medium mb-2">
                Translation :
            </label>
            <div className="p-4 border border-grey rounded-md">
                {text}
            </div>
        </div>
    )
}
