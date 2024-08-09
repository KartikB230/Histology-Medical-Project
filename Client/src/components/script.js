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
