import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Search() {
	const [term, setTerm] = useState("dragonfly")
	const [debouncedTerm, setDebouncedTerm] = useState(term)
	const [results, setResults] = useState([])

	const renderedResults = results.map(result => {
		return (
			<div key={result.pageid} className="md:flex justify-between my-2 p-4 rounded-md bg-vert-light">
				<div>
					<div className="mb-2 text-md font-medium">
						{result.title}
					</div>
					<span 
						dangerouslySetInnerHTML={{ __html: result.snippet}} // Only with trusted sources
						className="text-sm">
					</span>
				</div>
				<a 
					href={`https://en.wikipedia.org?curid=${result.pageid}`} 
					target="_blank"
					rel="noreferrer"
					className="block md:flex md:self-center mt-4 md:mt-0 md:ml-8 px-4 py-2 font-bold uppercase text-center text-white transition bg-vert-malachite hover:bg-blue-500 rounded-md"
				>
					Go
				</a>
			</div>
		)
	})

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setDebouncedTerm(term)
		}, 1000)

		return() => {
			clearTimeout(timeoutId)
		}
	}, [term])

	useEffect(() => {
		const search = async () => {
			const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
				params: {
					action: 'query',
					list: 'search',
					origin: '*',
					format: 'json',
					srsearch: debouncedTerm
				}
			})
			setResults(data.query.search)
		}
		search()
	}, [debouncedTerm])

	return (
		<div>
			<form className="mb-8">
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

			<div className="">
				{renderedResults}
			</div>
		</div>
	)
}
