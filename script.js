const question = document.getElementById('question');
const options = document.getElementById('options');
const result = document.getElementById('result');
const nextBtn = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    flagUrl: 'images/francuska.png',
    options: ['Francuska', 'Njemačka', 'Italija'],
    answer: 'Francuska',
    answered: false
  },
  {
    flagUrl: 'images/brazil.png',
    options: ['Brazil', 'Argentina', 'Urugvaj'],
    answer: 'Brazil',
    answered: false
  },
  {
    flagUrl: 'images/italija.png',
    options: ['Italija', 'Francuska', 'Španjolska'],
    answer: 'Italija',
    answered: false
  },
  {
    flagUrl: 'images/madjarska.png',
    options: ['Bugarska', 'Italija', 'Madjarska'],
    answer: 'Madjarska',
    answered: false
  },
  {
    flagUrl: 'images/malta.png',
    options: ['Norveška', 'Danska', 'Malta'],
    answer: 'Madjarska',
    answered: false
  },
  {
    flagUrl: 'images/bugarska.png',
    options: ['Bugarska', 'Italija', 'Madjarska'],
    answer: 'Bugarska',
    answered: false
  },
  {
    flagUrl: 'images/njemacka.png',
    options: ['Švicarska', 'Njemačka', 'Austria'],
    answer: 'Njemačka',
    answered: false
  },
  


];

function showQuestion() {
  clearResult();

  const currentQuestion = questions[currentQuestionIndex];
  const flagImg = document.createElement('img');
  flagImg.src = currentQuestion.flagUrl;
  question.innerHTML = '';
  question.appendChild(flagImg);

  options.innerHTML = '';
  for (let i = 0; i < currentQuestion.options.length; i++) {
    const option = document.createElement('button');
    option.textContent = currentQuestion.options[i];
    option.addEventListener('click', checkAnswer);
    options.appendChild(option);
  }
}

function checkAnswer(e) {
  const selectedOption = e.target;
  const correctAnswer = questions[currentQuestionIndex].answer;

  if (selectedOption.textContent === correctAnswer) {
    result.textContent = 'Točno!';
    score++;
  } else {
    result.innerHTML = `Netočno! Točan odgovor je <b>${correctAnswer}</b>.`;
  }

  questions[currentQuestionIndex].answered = true;

  options.querySelectorAll('button').forEach(btn => {
    btn.removeEventListener('click', checkAnswer);
  });

  nextBtn.style.display = 'block';
}

function clearResult() {
  result.textContent = '';
}

function showResult() {
  question.style.display = 'none';
  options.style.display = 'none';
  nextBtn.style.display = 'none';

  const maxScore = questions.length;
  const message = `Završeno! Osvojili ste ${score} bodova od maksimalnih ${maxScore}.`;
  result.textContent = message;
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

nextBtn.addEventListener('click', nextQuestion);

showQuestion();
