import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetchBreeds = () => {
	const [breeds, setBreeds] = useState([])

	useEffect(() => {
		axios.get('https://dog.ceo/api/breeds/list/all').then((data) => {
			const breedsObj = data?.data.message
			const formatted = formatBreeds(breedsObj)
			setBreeds(formatted)
		})
	}, [])

	function formatBreeds(unformattedObj) {
		return Object.keys(unformattedObj)
			.map((key) => {
				if (unformattedObj[key].length > 0) {
					return unformattedObj[key].map((sub) => `${sub} ${key}`)
				} else {
					return key
				}
			})
			.flat()
	}

	return breeds
}

export default useFetchBreeds
