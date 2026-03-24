import runGame from '../index.js'
import { getRandomNumber } from '../utils/getRandomNumber.js'

const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

const generateRound = () => {
  const start = getRandomNumber(1, 50)
  const step = getRandomNumber(2, 10)
  const length = getRandomNumber(5, 10)
  const hiddenIndex = getRandomNumber(0, length - 1)

  const progression = generateProgression(start, step, length)

  const correctAnswer = String(progression[hiddenIndex])

  const questionParts = [...progression]
  questionParts[hiddenIndex] = '..'
  const question = questionParts.join(' ')

  return { question, correctAnswer }
}

const startGame = () => {
  const gameDescription = 'What number is missing in the progression?'
  runGame(gameDescription, generateRound)
}

export default startGame
