import { useState, useEffect } from 'react'
import { TbDog } from 'react-icons/tb'

// Custom Hooks and helpers
import useFetchRandomDog from './hooks/useFetchRandomDog'
import useFetchBreeds from './hooks/useFetchBreeds'
import getRandomElement from './utility/getRandomElement'

// Components
import Game from './components/Game'

// TODO
// Add next dog arrow after guess
// display score
// improve style
// refactor, reduce api calls

function App() {
	const [shuffledAnswers, setShuffledAnswers] = useState(null)
	const [guessedCorrectly, setGuessedCorrectly] = useState(false)
	const [showResult, setShowResult] = useState(false)
	const [userScore, setUserScore] = useState(0)

	const [allBreeds, setAllBreeds] = useState()
	const [randomDog, setRandomDog] = useState()

	// const allBreeds = useFetchBreeds()
	// const randomDog = useFetchRandomDog()
	const breeds = useFetchBreeds()
	const dog = useFetchRandomDog()

	useEffect(() => {
		setAllBreeds(breeds)
		setRandomDog(dog)
	}, [breeds, dog])

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

	const checkAnswer = (event, userGuess) => {
		const result = userGuess === randomDog?.breed
		console.log(userGuess)
		console.log(randomDog?.breed)
		console.log(result)
		setGuessedCorrectly(result)
		setShowResult(true)
		result && setUserScore((prev) => prev + 1)
	}

	return (
		<div
			className=' mx-auto h-screen  
    bg-gradient-to-b from-french-blue to-cerulean-crayola
    grid place-content-center font-sans text-cultured'
		>
			<h1 className='animate-fadeInMedium text-2xl uppercase text-center font-extrabold font-sans rounded-xl shadow-xl py-2 bg-gradient-to-r from-french-blue to-cerulean-crayola flex items-center justify-center'>
				Guess that <TbDog className='ml-2 mt-1' />
			</h1>
			<Game
				randomDog={randomDog}
				shuffledAnswers={shuffledAnswers}
				checkAnswer={checkAnswer}
				userScore={userScore}
				guessedCorrectly={guessedCorrectly}
				showResult={showResult}
			/>
		</div>
	)
}

export default App
