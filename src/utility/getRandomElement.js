export default function getRandomElement(list) {
	return list[randomNumber(list.length)]
}

function randomNumber(max) {
	return Math.floor(Math.random() * max)
}
