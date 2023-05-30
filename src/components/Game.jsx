import { ImCheckmark } from 'react-icons/im'
import { ImCross } from 'react-icons/im'

const Game = ({ randomDog, shuffledAnswers, checkAnswer, userScore, guessedCorrectly, showResult }) => {
	return (
		<div className='rounded-xl p-6 bg-gradient-to-r from-french-blue to-cerulean-crayola my-6 shadow-xl relative'>
			{showResult && guessedCorrectly && (
				<ImCheckmark
					className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-100%]'
					size={250}
					color='#3EC300'
				/>
			)}
			{showResult && !guessedCorrectly && (
				<ImCross
					className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-100%]'
					size={250}
					color='#D63230'
				/>
			)}

			<img
				className='object-cover h-96 w-96 rounded-xl shadow-xl'
				src={randomDog?.imgSrc}
				alt={randomDog?.breed}
			/>

			<div className=' grid justify-items-center gap-2 mt-4 min-w-300'>
				{shuffledAnswers &&
					shuffledAnswers.map((answer) => {
						return (
							<button
								className='bg-gradient-to-tr from-french-blue to-cerulean-crayola rounded-full w-4/5 p-2 font-semibold text-lg capitalize shadow-xl'
								style={showResult && answer === randomDog.breed ? { backgroundColor: '#3EC300' } : {}}
								key={answer}
								onClick={(event) => checkAnswer(event, answer)}
							>
								{answer}
							</button>
						)
					})}
			</div>
			{/* <h2>{userScore}</h2> */}
		</div>
	)
}

export default Game
