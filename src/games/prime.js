import runGame from '../index.js'
import { getRandomNumber } from '../utils/getRandomNumber.js'

const isPrime = (num) => {
  if (num < 2) {
    return false
  }

  const sqrt = Math.sqrt(num)

  for (let i = 2; i <= sqrt; i += 1) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

const generateRound = () => {
  const question = getRandomNumber(1, 100)
  const correctAnswer = isPrime(question) ? 'yes' : 'no'

  return { question, correctAnswer }
}

const startGame = () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".'
  runGame(gameDescription, generateRound)
}

export default startGame
