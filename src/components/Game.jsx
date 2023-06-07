import { ImCheckmark } from 'react-icons/im'
import { ImCross } from 'react-icons/im'
import { AiFillCaretRight } from 'react-icons/ai'
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
		<div className=' animate-fadeInSlow rounded-xl pb-2 pt-2 px-4 bg-gradient-to-r from-french-blue to-cerulean-crayola my-2 shadow-xl relative'>
			<h1 className='animate-fadeInMedium text-lg uppercase text-center font-semibold font-sans py-1  flex items-center justify-center shadow-xl rounded-lg'>
				Guess that <TbDog className='ml-1 mt-1' />
			</h1>
			<div className='flex justify-end m-0 font-light text-xs pr-2'>
				Score: {userScore}/{questionCount}
			</div>
			{showResult && guessedCorrectly && (
				<ImCheckmark
					className='animate-fadeInFast absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-80%]'
					size={150}
					color='#3EC300'
				/>
			)}
			{showResult && !guessedCorrectly && (
				<ImCross
					className='animate-fadeInFast fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-80%]'
					size={150}
					color='#D63230'
				/>
			)}

			<img
				className='animate-fadeInSlow object-cover w-48 h-48 m-auto rounded-lg shadow-xl'
				src={randomDog?.imgSrc}
				alt={randomDog?.breed}
			/>

			<div className=' grid justify-items-center gap-1 mt-1 '>
				{shuffledAnswers &&
					shuffledAnswers.map((answer) => {
						return (
							<button
								disabled={showResult}
								className={`
                animate-grow
                bg-gradient-to-tr from-french-blue to-cerulean-crayola w-full p-0 font-light text-sm capitalize shadow-xl border-b-4 border-french-blue rounded
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
			<div className='h-6 flex justify-end'>
				{showResult && (
					<button
						className='animate-slide flex items-center cursor'
						onClick={nextDog}
					>
						<AiFillCaretRight size={20} />
					</button>
				)}
			</div>
		</div>
	)
}

export default Game
