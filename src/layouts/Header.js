import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="bg-rose-corail">
            <Link to="/">
                <h1 className="p-4 text-2xl font-black text-center text-black">React Widget</h1>
            </Link>
            
            <nav className="flex justify-center p-4 text-xl font-bold text-center bg-rose-light text-white">
                <Link to="/accordion" className="mx-8">
                    Accordion
                </Link>
                <Link to="/search" className="mx-8">
                    Wikipedia
                </Link>
                <Link to="/dropdown" className="mx-8">
                    Dropdown Color
                </Link>
            </nav>
        </header>
    )
}
