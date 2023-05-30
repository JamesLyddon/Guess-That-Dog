import { ImCheckmark } from 'react-icons/im'
import { ImCross } from 'react-icons/im'
import { AiFillCaretRight } from 'react-icons/ai'
import { FaDog } from 'react-icons/Fa'
import { TbDog } from 'react-icons/tb'

const Game = ({
	randomDog,
	shuffledAnswers,
	checkAnswer,
	userScore,
	guessedCorrectly,
	showResult,
	nextDog,
	questionCount,
}) => {
	return (
		<div className='animate-fadeInSlow rounded-xl pb-4 pt-2 px-4 bg-gradient-to-r from-french-blue to-cerulean-crayola my-2 shadow-xl relative'>
			<h1 className='animate-fadeInMedium text-2xl uppercase text-center font-extrabold font-sans py-2  flex items-center justify-center shadow-xl rounded-full'>
				Guess that <TbDog className='ml-2 mt-1' />
			</h1>
			<div className='flex justify-end m-0 font-semibold pr-2'>
				Score: {userScore}/{questionCount}
			</div>
			{showResult && guessedCorrectly && (
				<ImCheckmark
					className='animate-fadeInFast absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-100%]'
					size={250}
					color='#3EC300'
				/>
			)}
			{showResult && !guessedCorrectly && (
				<ImCross
					className='animate-fadeInFast absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-100%]'
					size={250}
					color='#D63230'
				/>
			)}

			<img
				className='animate-fadeInSlow object-cover h-96 w-96 rounded-xl shadow-xl'
				src={randomDog?.imgSrc}
				alt={randomDog?.breed}
			/>

			<div className=' grid justify-items-center gap-2 mt-4 mb-4 min-w-300'>
				{shuffledAnswers &&
					shuffledAnswers.map((answer) => {
						return (
							<button
								disabled={showResult}
								className={`
                animate-grow
                bg-gradient-to-tr from-french-blue to-cerulean-crayola w-3/5 p-2 font-semibold text-lg capitalize shadow-xl border-b-4 border-french-blue rounded
                ${
									showResult && answer === randomDog.breed
										? 'bg-gradient-to-tr from-kellygreen-400 to-kellygreen-600 border-kellygreen-400'
										: ''
								}
                ${
									showResult && answer !== randomDog.breed
										? 'bg-gradient-to-tr from-persianred-400 to-persianred-600 border-persianred-400'
										: ''
								}
                `}
								key={answer}
								onClick={() => checkAnswer(answer)}
							>
								{answer}
							</button>
						)
					})}
			</div>
			<div className='h-12 flex justify-end'>
				{showResult && (
					<button
						className='animate-slide flex items-center cursor'
						onClick={nextDog}
					>
						<FaDog size={50} />
						<AiFillCaretRight size={40} />
					</button>
				)}
			</div>
		</div>
	)
}

export default Game
