import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="bg-blue-300">
            <h1 className="p-4 text-2xl font-black text-center text-black">React Widget</h1>
            <nav className="flex justify-center p-4 text-xl font-bold text-center bg-blue-700 text-white">
                <Link to="/" className="mx-8">
                    Accordion
                </Link>
                <Link to="/search" className="mx-8">
                    Wikipedia
                </Link>
            </nav>
        </header>
    )
}
