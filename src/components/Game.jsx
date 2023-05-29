const Game = ({ randomDog, shuffledAnswers, checkAnswer, userScore }) => {
	return (
		<div className='rounded-xl p-4 bg-purple-900 m-2'>
			<div>
				{/* <p>{randomDog?.breed}</p> */}
				<img
					className='object-cover h-96 w-96 rounded-xl'
					src={randomDog?.imgSrc}
					alt={randomDog?.breed}
				/>
			</div>
			<div className=' grid justify-items-center gap-2 my-4 min-w-300'>
				{shuffledAnswers &&
					shuffledAnswers.map((answer) => {
						const words = answer.split(' ')
						const formattedAnswer = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

						return (
							<button
								className='bg-purple-800 rounded-full w-4/5 p-2 text-slate-300 font-semibold'
								key={answer}
								onClick={() => checkAnswer(answer)}
							>
								{formattedAnswer}
							</button>
						)
					})}
			</div>
			{/* <h2>{userScore}</h2> */}
		</div>
	)
}

export default Game
