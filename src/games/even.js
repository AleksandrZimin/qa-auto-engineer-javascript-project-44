import runGame from '../index.js'
import { getRandomNumber } from '../utils/getRandomNumber.js'

const isEven = number => number % 2 === 0

const generateRound = () => {
  const question = getRandomNumber(1, 100)
  const correctAnswer = isEven(question) ? 'yes' : 'no'
  return { question, correctAnswer }
}

const startGame = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".'
  runGame(gameDescription, generateRound)
}

export default startGame
