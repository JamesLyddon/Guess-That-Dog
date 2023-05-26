import { useState, useEffect } from 'react'

// Custom Hooks and helpers
import useFetchRandomDog from './hooks/useFetchRandomDog'
import useFetchBreeds from './hooks/useFetchBreeds'
import getRandomElement from './utility/getRandomElement'

// Components
import Game from './components/Game'

// TODO
// Check over using fetch hooks - add 'Loading' and 'Error' states to hooks to prevent refetching while already fetching
// Add correct and incorrect guess events, disable buttons, show 'next dog' button
// Add tailwind and style after making a mockup
// Make Entry and Exit Screen components
// Add ReactRouter DOM and set up routes

function App() {
	const [shuffledAnswers, setShuffledAnswers] = useState(null)
	const [guessedCorrectly, setGuessedCorrectly] = useState(false)
	const [userScore, setUserScore] = useState(0)

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

	const checkAnswer = (userGuess) => {
		const result = userGuess === randomDog?.breed
		setGuessedCorrectly(result)
		guessedCorrectly && setUserScore((prev) => prev + 1)
	}

	return (
		<>
			<Game
				randomDog={randomDog}
				shuffledAnswers={shuffledAnswers}
				checkAnswer={checkAnswer}
				userScore={userScore}
			/>
		</>
	)
}

export default App
