import { useState, useEffect } from 'react'
import { useCallback } from 'react'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
// Custom Hooks and helpers
import useFetchRandomDog from './hooks/useFetchRandomDog'
import useFetchBreeds from './hooks/useFetchBreeds'
import getRandomElement from './utility/getRandomElement'

// Components
import Game from './components/Game'
// import ParticleBackground from './components/ParticleBackground'

function App() {
	const [shuffledAnswers, setShuffledAnswers] = useState(null)
	const [guessedCorrectly, setGuessedCorrectly] = useState(false)
	const [showResult, setShowResult] = useState(false)
	const [userScore, setUserScore] = useState(0)

	const [allBreeds, setAllBreeds] = useState()
	const [randomDog, setRandomDog] = useState()
	const [questionCount, setQuestionCount] = useState(1)

  const init = useCallback(async (engine) => {
		await loadFull(engine)
	}, [])

	const breeds = useFetchBreeds()
	const dog = useFetchRandomDog(questionCount)

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
				className='h-screen mx-auto  
    bg-gradient-to-b from-french-blue to-cerulean-crayola
    grid place-content-center font-sans text-cultured'
			>
      <Particles
			options={{
				particles: {
					color: {
						value: ['#39A9DB'],
					},
					number: {
						value: 100,
					},
					opacity: {
						value: { min: 0.3, max: 1 },
					},
					shape: {
						type: ['image', 'image'],
						options: {
							image: [
								{
									src: '/dog1.svg',
								},
								{
									src: '/dog2.svg',
								},
								{
									src: '/dog3.svg',
								},
								{
									src: '/dog4.svg',
								},
								{
									src: '/dog5.svg',
								},
								{ src: '/dog6.svg' },
							],
						},
					},
					size: {
						value: { min: 0.1, max: 20 },
					},
					move: {
						direction: 'right',
						enable: true,
						speed: { min: 1, max: 3 },
						straight: false,
					},
					rotate: {
						value: {
							min: 0,
							max: 360,
						},
						direction: 'random',
						animation: {
							enable: true,
							speed: { min: 3, max: 5 },
						},
					},
					tilt: {
						direction: 'random',
						enable: true,
						value: {
							min: 0,
							max: 360,
						},
						animation: {
							enable: true,
							speed: { min: 3, max: 5 },
						},
					},
					roll: {
						darken: {
							enable: true,
							value: 5,
						},
						enable: true,
						speed: {
							min: 3,
							max: 5,
						},
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
