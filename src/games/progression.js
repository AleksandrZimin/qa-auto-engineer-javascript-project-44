// src/games/progression.js
import runGame from '../index.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  // Генерируем случайные параметры прогрессии
  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(2, 10);
  const length = getRandomNumber(5, 10); // длина от 5 до 10
  const hiddenIndex = getRandomNumber(0, length - 1); // позиция спрятанного элемента
  
  // Создаём прогрессию
  const progression = generateProgression(start, step, length);
  
  // Сохраняем правильный ответ
  const correctAnswer = String(progression[hiddenIndex]);
  
  // Создаём вопрос, заменяя один элемент на ".."
  const questionParts = [...progression];
  questionParts[hiddenIndex] = '..';
  const question = questionParts.join(' ');
  
  return { question, correctAnswer };
};

const startGame = () => {
  const gameDescription = 'What number is missing in the progression?';
  runGame(gameDescription, generateRound);
};

export default startGame;