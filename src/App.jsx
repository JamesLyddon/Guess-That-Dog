import { useState, useEffect, useCallback } from 'react'
import { TbDog } from 'react-icons/tb'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
// Custom Hooks and helpers
import useFetchRandomDog from './hooks/useFetchRandomDog'
import useFetchBreeds from './hooks/useFetchBreeds'
import getRandomElement from './utility/getRandomElement'

// Components
import Game from './components/Game'

function App() {
	const [count, setCount] = useState(100)
	const [shuffledAnswers, setShuffledAnswers] = useState(null)
	const [guessedCorrectly, setGuessedCorrectly] = useState(false)
	const [showResult, setShowResult] = useState(false)
	const [userScore, setUserScore] = useState(0)

	const [allBreeds, setAllBreeds] = useState()
	const [randomDog, setRandomDog] = useState()
	const [questionCount, setQuestionCount] = useState(1)

	const breeds = useFetchBreeds()
	const dog = useFetchRandomDog(questionCount)

	const init = useCallback(async (engine) => {
		await loadFull(engine)
	})

	useEffect(() => {
		setAllBreeds(breeds)
		setRandomDog(dog)
	}, [breeds, dog])

	useEffect(() => {
		generateAnswers()
		setShowResult(false)
		setGuessedCorrectly(false)
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

	const generateAnswers = () => {
		if (randomDog) {
			const answers = new Set([randomDog?.breed])
			while (answers.size < 4) {
				answers.add(getRandomElement(allBreeds))
			}
			const answersArr = Array.from(answers)
			setShuffledAnswers(shuffleArray(answersArr))
		}
	}

	const checkAnswer = (userGuess) => {
		const result = userGuess === randomDog?.breed
		setGuessedCorrectly(result)
		setShowResult(true)
		result && setUserScore((prev) => prev + 1)
	}

	const nextDog = () => {
		setQuestionCount((prevCount) => prevCount + 1)
	}

	return (
		<>
			<div
				className=' mx-auto h-screen  
    bg-gradient-to-b from-french-blue to-cerulean-crayola
    grid place-content-center font-sans text-cultured'
			>
				<Particles
					options={{
						particles: {
							color: {
								value: '#fff',
							},
							number: {
								value: count,
							},
							opacity: {
								value: { min: 0.3, max: 1 },
							},
							shape: {
								type: 'circle',
							},
							size: {
								value: { min: 0.1, max: 2 },
							},
							move: {
								direction: 'bottom-right',
								enable: true,
								speed: { min: 3, max: 5 },
								straight: true,
							},
						},
					}}
					init={init}
				/>
				<Game
					randomDog={randomDog}
					shuffledAnswers={shuffledAnswers}
					checkAnswer={checkAnswer}
					userScore={userScore}
					guessedCorrectly={guessedCorrectly}
					showResult={showResult}
					questionCount={questionCount}
					nextDog={nextDog}
				/>
			</div>
		</>
	)
}

export default App
