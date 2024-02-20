// Get the modal, modal image, modal description, and audio player
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImage");
var description = document.getElementById("imageDescription");
var audioPlayer = document.getElementById("audioPlayer");

// Open the modal with the clicked image and information
// Open the modal with the clicked image and information
export function openModal(elementId, imagePath, desc) {
  modal.style.display = "block";
  modalImg.src = imagePath;
  description.innerHTML = desc;
  
  // Find the audio element inside the popup corresponding to the given elementId
  var audioElement = document.getElementById(elementId).querySelector("audio");
  
  // Check if the audio element exists before setting its source
  if (audioElement) {
    audioPlayer.src = audioElement.querySelector("source").src;
  } else {
    // If the audio element is not found, set the audio source to an empty string
    audioPlayer.src = "";
  }
}

// Close the modal
export function closeModal() {
  modal.style.display = "none";
}

// Open the corresponding popup when a button is clicked
export function openPopup(button) {
  var popupId = button.getAttribute("data-popup");
  document.getElementById(popupId).style.display = "block";
}

export function closePopup(button) {
  var popupId = button.getAttribute("data-popup");
  document.getElementById(popupId).style.display = "none";
}
