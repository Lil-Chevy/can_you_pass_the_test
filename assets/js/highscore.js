let highestScore = localStorage.getItem("HighScore");

document.addEventListener("DOMContentLoaded", function gettingHighScores() {
  // from local Storage.
  let highestScore = localStorage.getItem("HighScore");
  // show scores.
  let localStorageScore = JSON.stringify(highestScore);
  document.querySelector("span").innerHTML = highestScore;
});

function addHighScore() {
  // capture username.
  let textFieldEntry = document.getElementById("hScore");
  let userNameInput = textFieldEntry.addEventListener("submit", addHighScore);
  // use for information display of score and username submission.
  let myArray = {
    key: userNameInput,
    Value: highestScore,
  };
  let myArray1 = JSON.stringify(myArray);
  //   set username to local storage
  console.log("userNameInput", userNameInput);
  //   add data to local storage.
  localStorage.setItem("User Name", myArray1);

  //   select ordered list
  let scoreBoard = document.querySelector("ol");
  //create list element
  let createLi = document.createElement("li");
  // take data and concatenate a string.
  let concatenateNameScore = myArray.key + " " + myArray.Value;
  // append username to ordered list
  scoreBoard.append(createLi, concatenateNameScore);
  // use local storage to persist data
}

// use this nonsense to set to local storage.
// let highestScore = localStorage.getItem("HighScore");
// let localStorageScore = JSON.stringify(highestScore);
