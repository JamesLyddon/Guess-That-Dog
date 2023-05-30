import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetchRandomDog = (questionCount) => {
	const [currentDog, setCurrentDog] = useState()

	useEffect(() => {
		axios.get('https://dog.ceo/api/breeds/image/random').then((data) => {
			const formatted = { breed: formatDogName(data?.data), imgSrc: data?.data.message }
			setCurrentDog(formatted)
		})
	}, [questionCount])

	function formatDogName(unformattedObj) {
		return unformattedObj.message.split('/')[4].split('-').reverse().join(' ')
	}

	return currentDog
}

export default useFetchRandomDog
