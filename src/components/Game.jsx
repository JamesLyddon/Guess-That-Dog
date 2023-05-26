import React from 'react'

const Game = ({ randomDog, shuffledAnswers, checkAnswer, userScore }) => {
	return (
		<>
			<div>
				<p>{randomDog?.breed}</p>
				<img
					src={randomDog?.imgSrc}
					alt={randomDog?.breed}
				/>
			</div>
			<div>
				{shuffledAnswers &&
					shuffledAnswers.map((answer) => (
						<button
							key={answer}
							onClick={() => checkAnswer(answer)}
						>
							{answer}
						</button>
					))}
			</div>
			<h2>{userScore}</h2>
		</>
	)
}

export default Game
