import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
	const [breeds, setBreeds] = useState([])

	useEffect(() => {
		axios.get('https://dog.ceo/api/breeds/list/all').then((data) => {
			const breedsObj = data?.data.message
			const formatted = Object.keys(breedsObj)
				.map((key) => {
					if (breedsObj[key].length > 0) {
						return breedsObj[key].map((sub) => `${sub} ${key}`)
					} else {
						return key
					}
				})
				.flat()
			console.log(breedsObj)
			console.log(formatted)
			setBreeds(formatted)
		})
	}, [])

	return (
		<div>
			All Breeds
			{breeds.map((breed, i) => {
				return (
					<div key={i}>
						<p>{breed}</p>
					</div>
				)
			})}
		</div>
	)
}

export default App

// for (const subBreed of breedsObj[key]) {
//   return `${subBreed} ${key}`
// }
