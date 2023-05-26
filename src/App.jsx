import { useState, useEffect } from 'react'
import axios from 'axios'

// Custom Hooks and helpers
import useFetchRandomDog from './hooks/useFetchRandomDog'
import useFetchBreeds from './hooks/useFetchBreeds'
import getRandomElement from './utility/getRandomElement'

function App() {
	const [shuffledAnswers, setShuffledAnswers] = useState(null)
	const allBreeds = useFetchBreeds()
	const randomDog = useFetchRandomDog()

	useEffect(() => {
		if (randomDog) {
			const answers = new Set([randomDog?.breed])
			while (answers.size < 4) {
				answers.add(getRandomElement(allBreeds))
			}
			const answersArr = Array.from(answers)
			setShuffledAnswers(shuffleArray(answersArr))
		}
	}, [randomDog])

	// Fisher-Yates algorithm
	const shuffleArray = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			const temp = array[i]
			array[i] = array[j]
			array[j] = temp
		}
		return array
	}

	return (
		<>
			<div>
				<p>{randomDog?.breed}</p>
				<img
					src={randomDog?.imgSrc}
					alt={randomDog?.breed}
				/>
			</div>
			<div>{shuffledAnswers && shuffledAnswers.map((answer) => <button key={answer}>{answer}</button>)}</div>
		</>
	)
}

export default App
