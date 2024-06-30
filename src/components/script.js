

export function openPopup1(imagePath, descriptionText, audioPath) {
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

  document.getElementById('overlay').style.display = 'flex';
}

export function resetPopup() {
  document.getElementById('popupImage').src = '';
  document.getElementById('popupInfo').innerHTML = '';
  document.getElementById('popupAudio').src = '';

  document.getElementById('popupImage').style.display = 'none';
  document.getElementById('popupInfo').style.display = 'none';
  document.getElementById('popupAudio').style.display = 'none';
}

export function closePopup() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('popupAudio').pause();
}

export function toggleButtons(buttonClicked, setButtonClicked) {
  document.querySelectorAll('.AllButtons').forEach(button => {
    button.style.display = button.style.display === 'none' ? 'block' : 'none';
  });
  setButtonClicked(!buttonClicked);
}
