window.HELP_IMPROVE_VIDEOJS = false;


function sleepSync(ms) {
  const start = Date.now();
  while (Date.now() - start < ms) {
    // Busy-waiting: do nothing, just wait for the time to pass
  }
}

$(document).ready(function() {
    console.log("ready!");
    // teaser
    const videoContainer = document.querySelector(".teaser-video-container");
    const video2Wrapper = document.getElementById("teaser-video2-wrapper");
    const slider = document.getElementById("teaser-slider");
    const video1 = document.getElementById("teaser-video1");
    const video2 = document.getElementById("teaser-video2");
    const labelTop = document.getElementById("teaser-label-top");
    const labelBottom = document.getElementById("teaser-label-bottom");

    // Set initial position for labels (50/50 split)
    labelTop.style.opacity = "1";
    labelBottom.style.opacity = "1";

    // Pause videos on hover
    videoContainer.addEventListener("mouseenter", () => {
      syncVideos();
      video1.pause();
      video2.pause();
    });

    // Resume videos on leave
    videoContainer.addEventListener("mouseleave", () => {
      syncVideos();
      video1.play();
      video2.play();
    });


    // Sync settings
    const syncThreshold = 0.01; // Allowable time difference (in seconds) for sync tolerance

    // Function to check and sync videos
    function syncVideos() {
      // console.log("syncing videos...");
      const video1Time = video1.currentTime;
      const video2Time = video2.currentTime;
      // If the videos are out of sync beyond the threshold
      if (Math.abs(video1Time - video2Time) > syncThreshold) {
        // Sync video2 to video1's time (or vice versa, depending on which you want to prioritize)
        console.log("actually syncing videos...");
        video2.currentTime = video1Time;
      }
    }

    // Polling mechanism to check sync every 50ms (20 times per second)
    setInterval(syncVideos, 10);

    // Move the slider dynamically and adjust label visibility
    videoContainer.addEventListener("mousemove", (event) => {
      const rect = videoContainer.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));

      // Update slider position and video clipping
      video2Wrapper.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
      slider.style.left = `${percentage}%`;

      // Hide the labels when the slider reaches their edges
      if (percentage <= 10) {
        labelTop.style.display = 'none';  // Hide top label when slider reaches 90%
      } else {
        labelTop.style.display = 'block'; // Show top label when slider moves away
      }

      if (percentage >= 90) {
        labelBottom.style.display = 'none';  // Hide bottom label when slider reaches 10%
      } else {
        labelBottom.style.display = 'block'; // Show bottom label when slider moves away
      }

      syncVideos();
    });
});


