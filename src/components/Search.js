import React, {useState} from 'react'

export default function Search() {
    const [term, setTerm] = useState("")

    // const onSearch = (e) => {
    //     // setTerm(e.target.value)
    //     console.log(e.target.value)
    // }

    return (
        <div>
            <h2 className="mb-4 text-xl font-bold uppercase">Wikipedia Search</h2>
            <form>
                <fieldset className="flex flex-col">
                    <label className="mb-2 text-sm font-bold">Enter search term</label>
                    <input 
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        type="text"
                        placeholder="dragonfly"
                        className="p-2 border rounded-md"
                    />
                </fieldset>
            </form>
        </div>
    )
}
