// Function to open the modal and play the video
function playVideoPopup() {
    const modal = document.getElementById("videoModal");
    const videoPlayer = document.getElementById("videoPlayer");
  
    // Display the modal
    modal.style.display = "flex";
  
    // Play the video
    videoPlayer.play();
  }
  
  // Function to close the modal and stop the video
  function closeVideoPopup() {
    const modal = document.getElementById("videoModal");
    const videoPlayer = document.getElementById("videoPlayer");
  
    // Hide the modal
    modal.style.display = "none";
  
    // Pause the video and reset it to the beginning
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  }
  
  // Close the modal when clicking outside of it
  window.onclick = function(event) {
    const modal = document.getElementById("videoModal");
    if (event.target === modal) {
      closeVideoPopup();
    }
  };
  