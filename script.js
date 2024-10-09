"use strict";

const questions = [
  {
    question: "What is the primary habitat of snow leopards?",
    answers: ["Deserts", "Rainforests", "Mountains", "Grasslands"],
    correct: 3
  },
  {
    question: "How long is a snow leopard's tail?",
    answers: ["60 cm", "100 cm", "120 cm", "150 cm"],
    correct: 2
  },
  {
    question: "What is a snow leopard's primary prey?",
    answers: ["Deer", "Mountain goats", "Blue Sheep", "Birds"],
    correct: 3
  },

  {
    question: "What is the largest current threat to Snow Leopards?",
    answers: ["Poaching", "Climate Change", "Habitat Loss", "Decline of Natural Prey"],
    correct: 1 
  }
];

function loadRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  const randomQuestion = questions[randomIndex];

  const questionElement = document.getElementById('quiz-question');
  const answersElement = document.getElementById('quiz-answers');
  
  questionElement.textContent = randomQuestion.question;
  answersElement.innerHTML = '';

  randomQuestion.answers.forEach((answer, index) => {
    const answerItem = document.createElement('li');
    answerItem.textContent = answer;
    answerItem.classList.add('answer-item');
    answerItem.addEventListener('click', () => checkAnswer(index, randomQuestion.correct));
    answersElement.appendChild(answerItem);
  });
}

function checkAnswer(selectedIndex, correctIndex) {
  const answerItems = document.querySelectorAll('.answer-item');
  answerItems.forEach((item, index) => {
    if (index === correctIndex) {
      item.classList.add('highlight-correct');
    } else if (index === selectedIndex) {
      item.classList.add('highlight-incorrect');
    }
  });
}

async function updatePoints(pointsToAdd) {
  const user = auth.currentUser;
  if(user) {
    const userRef = db.collection('users').doc(user.uid);
    const incremement = firebase.firestore.FieldValue.increment(pointsToAdd);
    await userRef.update({points: increment});
    const userDoc = await userRef.get();
    document.getElementById('user-points').textContent = userDoc.data().points;
  }
}

window.onload = loadRandomQuestion;

async function updatePoints(pointsToAdd) {
  const user = auth.currentUser;
  if(user) {
    const userRef = db.collection('users').doc(user.uid);
    const increment = firebase.firestore.FieldValue.increment(pointsToAdd);
    await userRef.update({points: increment});
    const userDoc = await userRef.get();
    document.getElementById('user-points').textContent = userDoc.data().points;
  }
}