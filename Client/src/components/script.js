import { useState } from 'react';

export function openPopup1(imagePath, descriptionText, audioPath, showButtons=false) {
  resetPopup();

  if (imagePath && imagePath !== '#') {
    document.getElementById('popupImage').src = imagePath;
    document.getElementById('popupImage').style.display = 'block';
  }

  if (descriptionText && descriptionText !== '#') {
    document.getElementById('popupInfo').innerHTML = descriptionText;
    document.getElementById('popupInfo').style.display = 'block';
  }

  if (audioPath && audioPath !== '#') {
    document.getElementById('popupAudio').src = audioPath;
    document.getElementById('popupAudio').style.display = 'block';
  }

  if (showButtons) {
    document.getElementById('additionalButtons').style.display = 'block';
  } else {
    document.getElementById('additionalButtons').style.display = 'none';
  }

  document.getElementById('overlay').style.display = 'flex';
  
}
export function openPopup(imagePath, descriptionText, audioPath, showButtons=false) {
  resetPopup();

  if (imagePath && imagePath !== '#') {
    document.getElementById('popupImage').src = imagePath;
    document.getElementById('popupImage').style.display = 'block';
  }

  if (descriptionText && descriptionText !== '#') {
    document.getElementById('popupInfo').innerHTML = descriptionText;
    document.getElementById('popupInfo').style.display = 'block';
  }

  if (audioPath && audioPath !== '#') {
    document.getElementById('popupAudio').src = audioPath;
    document.getElementById('popupAudio').style.display = 'block';
  }

  if (showButtons) {
    document.getElementById('additionalButtons').style.display = 'block';
  } else {
    document.getElementById('additionalButtons').style.display = 'none';
  }

  document.getElementById('overlay').style.display = 'flex';
  
}

export function resetPopup() {
  document.getElementById('popupImage').src = '';
  document.getElementById('popupInfo').innerHTML = '';
  document.getElementById('popupAudio').src = '';

  document.getElementById('popupImage').style.display = 'none';
  document.getElementById('popupInfo').style.display = 'none';
  document.getElementById('popupAudio').style.display = 'none';
  document.getElementById('additionalButtons').style.display = 'none';
}

export function closePopup() {
  const overlay = document.getElementById('overlay');
  const popupAudio = document.getElementById('popupAudio');

  if (overlay) {
    overlay.style.display = 'none';
  } else {
    console.warn("Overlay element not found.");
  }

  if (popupAudio) {
    popupAudio.pause();
  } else {
    console.warn("Popup audio element not found.");
  }
  
}

export function toggleButtons(buttonClicked, setButtonClicked) {
  document.querySelectorAll('.AllButtons').forEach(button => {
    button.style.display = button.style.display === 'none' ? 'block' : 'none';
  });
  setButtonClicked(!buttonClicked);
}
export function handleQuizSubmission(answers, userAnswers) {
  answers.forEach((answer, index) => {
    const correctOption = document.querySelector(`#question-${index} .option-${answer}`);
    correctOption.classList.add('correct');

    const userAnswer = userAnswers[index];
    if (userAnswer !== answer) {
      const wrongOption = document.querySelector(`#question-${index} .option-${userAnswer}`);
      if (wrongOption) wrongOption.classList.add('wrong');
    }
  });
}

export function useQuizLogic(totalQuestions) {
  const [answers, setAnswers] = useState(Array(totalQuestions).fill(null));
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = (questions) => {
    let newScore = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correct) {
        newScore += 1;
      }
    });
    setScore(newScore);
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers(Array(totalQuestions).fill(null));
    setScore(null);
    setSubmitted(false);
  };

  const getOptionClass = (question, questionIndex, optionIndex) => {
    if (!submitted) return '';
    if (optionIndex === question.correct) return 'correct';
    if (answers[questionIndex] === optionIndex && optionIndex !== question.correct) return 'wrong';
    return '';
  };

  return {
    answers,
    score,
    submitted,
    handleAnswerChange,
    handleSubmit,
    handleReset,
    getOptionClass
  };
}
