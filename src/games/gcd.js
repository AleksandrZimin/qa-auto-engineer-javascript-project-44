import runGame from '../index.js'

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const gcd = (a, b) => {
  let x = Math.abs(a)
  let y = Math.abs(b)
  while (y !== 0) {
    const temp = y
    y = x % y
    x = temp
  }
  return x
}

const generateRound = () => {
  const num1 = getRandomNumber(1, 100)
  const num2 = getRandomNumber(1, 100)

  const question = `${num1} ${num2}`
  const correctAnswer = String(gcd(num1, num2))

  return { question, correctAnswer }
}

const startGame = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.'
  runGame(gameDescription, generateRound)
}

export default startGame
