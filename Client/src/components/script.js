import { useState } from 'react';

// Popup stack to track nested popups
let popupStack = [];

export function openPopup1(imagePath, descriptionText, audioPath, showButtons=false) {
  const overlay = document.getElementById('overlay');

  if (overlay && overlay.style.display === 'flex') {
    const currentState = {
      image: document.getElementById('popupImage').src,
      description: document.getElementById('popupInfo').innerHTML,
      audio: document.getElementById('popupAudio').src,
      showButtons: document.getElementById('additionalButtons').style.display === 'block',
      imageDisplay: document.getElementById('popupImage').style.display,
      descDisplay: document.getElementById('popupInfo').style.display,
      audioDisplay: document.getElementById('popupAudio').style.display
    };
    popupStack.push(currentState);
    window.history.pushState({ popupLevel: popupStack.length }, '');
  }

  resetPopup();

  const hasValidValue = (val) =>
    val !== undefined && val !== null && val !== '' && val !== '#';

  if (hasValidValue(imagePath)) {
    document.getElementById('popupImage').src = imagePath;
    document.getElementById('popupImage').style.display = 'block';
    document.getElementById('popupImageWrapper').style.display = 'block';
  }

  if (hasValidValue(descriptionText)) {
    document.getElementById('popupInfo').innerHTML = descriptionText;
    document.getElementById('popupInfo').style.display = 'block';
  }

  if (hasValidValue(audioPath)) {
    document.getElementById('popupAudio').src = audioPath;
    document.getElementById('popupAudio').style.display = 'block';
  }

  document.getElementById('additionalButtons').style.display = showButtons ? 'block' : 'none';
  document.getElementById('overlay').style.display = 'flex';
}

export function openPopup(imagePath, descriptionText, audioPath, showButtons=false) {
  const overlay = document.getElementById('overlay');
  
  // Only save current state if overlay is already open (nested popup scenario)
  if (overlay && overlay.style.display === 'flex') {
    const currentState = {
      image: document.getElementById('popupImage').src,
      description: document.getElementById('popupInfo').innerHTML,
      audio: document.getElementById('popupAudio').src,
      showButtons: document.getElementById('additionalButtons').style.display === 'block',
      imageDisplay: document.getElementById('popupImage').style.display,
      descDisplay: document.getElementById('popupInfo').style.display,
      audioDisplay: document.getElementById('popupAudio').style.display
    };

    popupStack.push(currentState);
    window.history.pushState({ popupLevel: popupStack.length }, '');
  }

  resetPopup();

  if (imagePath && imagePath !== '#') {
    document.getElementById('popupImage').src = imagePath;
    document.getElementById('popupImage').style.display = 'block';
    document.getElementById('popupImageWrapper').style.display = 'block';
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

export function closePopup() {
  const overlay = document.getElementById('overlay');
  const popupAudio = document.getElementById('popupAudio');

  if (popupAudio) {
    popupAudio.pause();
  }

  // Check if there's a parent popup in the stack
  if (popupStack.length > 0) {
    const previousState = popupStack.pop();
    
    // Restore previous popup state
    resetPopup();
    
    if (previousState.image) {
      document.getElementById('popupImage').src = previousState.image;
      document.getElementById('popupImage').style.display = previousState.imageDisplay;
      document.getElementById('popupImageWrapper').style.display = previousState.imageDisplay;
    }
    
    if (previousState.description) {
      document.getElementById('popupInfo').innerHTML = previousState.description;
      document.getElementById('popupInfo').style.display = previousState.descDisplay;
    }
    
    if (previousState.audio) {
      document.getElementById('popupAudio').src = previousState.audio;
      document.getElementById('popupAudio').style.display = previousState.audioDisplay;
    }
    
    if (previousState.showButtons) {
      document.getElementById('additionalButtons').style.display = 'block';
    }
    
    overlay.style.display = 'flex';
  } else {
    // No parent popup, close overlay completely
    if (overlay) {
      overlay.style.display = 'none';
    }
    resetPopup();
    popupStack = []; // Clear stack
  }
}

export function resetPopup() {
  const popupImage = document.getElementById('popupImage');
  const popupInfo = document.getElementById('popupInfo');
  const popupAudio = document.getElementById('popupAudio');
  const popupImageWrapper = document.getElementById('popupImageWrapper');
  const additionalButtons = document.getElementById('additionalButtons');

  if (popupImage) {
    popupImage.src = '';
    popupImage.style.display = 'none';
  }

  if (popupInfo) {
    popupInfo.innerHTML = '';
    popupInfo.style.display = 'none';
  }

  if (popupAudio) {
    popupAudio.src = '';
    popupAudio.style.display = 'none';
  }

  if (popupImageWrapper) {
    popupImageWrapper.style.display = 'none';
  }

  if (additionalButtons) {
    additionalButtons.style.display = 'none';
  }
}

// Initialize browser back button handler
export function initPopupHistory() {
  window.addEventListener('popstate', (event) => {
    closePopup();
  });
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