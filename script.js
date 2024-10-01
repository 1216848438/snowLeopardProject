document.getElementById('submitQuiz').addEventListener('click', function() {
    const correctAnswer = 'mountains';
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const resultMessage = document.getElementById('resultMessage');
    
    if (!selectedAnswer) {
      resultMessage.textContent = "Please select an answer!";
      return;
    }
    
    const answers = document.querySelectorAll('input[name="answer"]');
    
    answers.forEach(answer => {
      if (answer.value === correctAnswer) {
        answer.parentElement.style.color = 'green'; 
      } else {
        answer.parentElement.style.color = 'red'; 
      }
    });
    
    if (selectedAnswer.value === correctAnswer) {
      resultMessage.textContent = "Correct!";
      resultMessage.style.color = 'green';
    } else {
      resultMessage.textContent = "Incorrect. The correct answer is Mountains.";
      resultMessage.style.color = 'red';
    }
  });
  