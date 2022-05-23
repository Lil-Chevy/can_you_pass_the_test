let highestScore = localStorage.getItem("HighScore");
// variables for high scores

// end of variables for high scores

function addHighScore() {
  event.preventDefault();
  // capture username.
  let userName = document.getElementById("hScore").value;
  // use for information display of score and username submission.
  let newUserScoreObj = {
    userName: userName,
    highestScore: highestScore,
  };
  //   set username to local storage
  console.log("userNameInput", userName);
  saveIntoLocalStorage(newUserScoreObj);
  //   select ordered list
  let scoreBoard = document.querySelector("ol");
  //create list element
  let createLi = document.createElement("li");
  // take data and concatenate a string.
  let concatenateNameScore =
    newUserScoreObj.userName + " " + newUserScoreObj.highestScore;
  // append username to ordered list
  scoreBoard.append(createLi);
  createLi.innerHTML = concatenateNameScore;
  // use local storage to persist data
}

function saveIntoLocalStorage(newUserScoreObj) {
  //   add data to local storage.
  // const newScore = { userName, highestScore };
  // highestScore.push(newScore);
  localStorage.setItem("User Name", newUserScoreObj.username);
  console.log("newUserScoreObj", newUserScoreObj);
  console.log("newUserScoreObj", newUserScoreObj.userName);
}
// restart button to go back to test
function goBackTest() {
  backButton.addEventListener("click", function () {
    window.location.href = "index.html";
  });
}
//loads high score from local storage
document.addEventListener("DOMContentLoaded", function gettingHighScores() {
  // from local Storage.
  let highestScore = localStorage.getItem("HighScore");
  // show scores.
  let localStorageScore = JSON.stringify(highestScore);
  document.querySelector("span").innerHTML = highestScore;
});
