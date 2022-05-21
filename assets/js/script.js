let questionBox = document.querySelector(".questionBox");
let optionDisplay = document.querySelector(".optionDisplay");

const test = {
  questionOne: {
    question: "what am the sky",
    answer: "blurple",
    options: ["plot", "tulip", "blurple"],
  },
  questionTwo: {
    question: "Taco Tuesday Menu",
    answer: "blurple",
    options: ["plot", "tulip", "frick"],
  },
};

console.dir(test);

// };

// Timer function
function startCountDown(seconds) {
  let timer = seconds - 1;

  const interval = setInterval(() => {
    timer--;
    document.getElementById("timer").innerHTML = timer + 1;
    if (timer < -1) {
      clearInterval(interval);
      alert(
        "Time is up! You did not finish the test in time. Please try again when you are ready!"
      );
      document.getElementById("timer").innerHTML = 0;
    }
  }, 1000);
}

// click the button starts the timer.
function start() {
  startCountDown(600);
  // makes button.
  //how do i iterate over questions
  questionBox.innerHTML = test.questionOne.question;
  // create a li for answer options.
  var questionLiOne = document.createElement("li");
  var questionLiTwo = document.createElement("li");
  var questionLiThree = document.createElement("li");
  // attach class to li
  questionLiOne.classList.add("answerOptions");
  questionLiTwo.classList.add("answerOptions");
  questionLiThree.classList.add("answerOptions");
  // attach answer options to ul
  optionDisplay.appendChild(questionLiOne);
  optionDisplay.appendChild(questionLiTwo);
  optionDisplay.appendChild(questionLiThree);

  // put answers text in li
  questionLiOne.appendChild(
    document.createTextNode(test.questionOne.options[0])
  );
  questionLiTwo.appendChild(
    document.createTextNode(test.questionOne.options[1])
  );
  questionLiThree.appendChild(
    document.createTextNode(test.questionOne.options[2])
  );

  // add function to list options.
  questionLiOne.addEventListener("click", answerQuestion1);
  questionLiTwo.addEventListener("click", answerQuestion2);
  questionLiThree.addEventListener("click", answerQuestion3);
}
// console.log("answer question One click", test.questionOne.answer);
function answerQuestion1() {
  // validate answer
  //  does answer match option.
  let aq1 = test.questionOne.answer == test.questionOne.options[0];
  if (!aq1) {
    console.log("was option 1 right? : ", aq1);
  }
  // to next question if other option is selected remove 10 seconds
  // does the answer provide match answer for the question
  // if yes:.
  // if last question, call end test.
  // else progress next question
  // else no: display wrong message
}

function answerQuestion2() {
  // validate answer
  //  does answer match option.
  let aq2 = test.questionOne.answer === test.questionOne.options[1];
  if (!aq2) {
    console.log("was option 2 right? :", aq2);
  }
  // to next question if other option is selected remove 10 seconds
  // does the answer provide match answer for the question
  // if yes:.
  // if last question, call end test.
  // else progress next question
  // else no: display wrong message
}

function answerQuestion3() {
  // validate answer
  //  does answer match option.
  let aq3 = test.questionOne.answer === test.questionOne.options[2];
  if (aq3) {
    console.log("was option 3 right?:", aq3);
  }
  // to next question if other option is selected remove 10 seconds
  // does the answer provide match answer for the question
  // if yes:.
  // if last question, call end test.
  // else progress next question
  // else no: display wrong message
}

function endTest() {
  // stop the timer.
  // present high score information.
}

function addHighScore() {
  // capture username.
  // use local storage to persist data
}

function gettingHighScores() {
  // from local Storage.
  // show scores.
}

// create elements and insert them onto the page.
// show question function.
// create box buttons with event handlers.

// Show the question on the screen
function showQuestion(questionObject) {
  // show the question
  // provide options
  // for loop through the option objects in the question
  // create button for each option, with button text for option
  // onClick calls answerQuestion with the options value
}

function removeQuestion() {
  // remove the question from the screen
}
