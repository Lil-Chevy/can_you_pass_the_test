document.addEventListener("DOMContentLoaded", function gettingHighScores() {
  // from local Storage.
  let highestScore = localStorage.getItem("HighScore");
  // show scores.
  let localStorageScore = JSON.stringify(highestScore);
  document.querySelector("span").innerHTML = highestScore;
});
