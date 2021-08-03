import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="bg-rose-corail">
            <Link to="/">
                <h1 className="p-4 md:text-2xl font-black text-center text-black">React Widget</h1>
            </Link>
            
            <nav className="flex flex-col md:flex-row justify-center p-4 md:text-xl font-bold text-center bg-rose text-black">
                <Link to="/accordion" className="mx-8 my-1 md:my-0 hover:text-white transition-all">
                    Accordion
                </Link>
                <Link to="/search" className="mx-8 my-1 md:my-0 hover:text-white transition-all">
                    Wikipedia
                </Link>
                <Link to="/dropdown" className="mx-8 my-1 md:my-0 hover:text-white transition-all">
                    Dropdown Color
                </Link>
                <Link to="/translator" className="mx-8 my-1 md:my-0 hover:text-white transition-all">
                    Translator
                </Link>
            </nav>
        </header>
    )
}
