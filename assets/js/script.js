let questionBox = document.querySelector(".questionBox");
let optionDisplay = document.querySelector(".optionDisplay");

const test = {
  timer: 0,
  currentQuestion: 0,
  questions: [
    {
      question: "what am the sky",
      answer: "blurple",
      options: ["plot", "tulip", "blurple"],
    },
    {
      question: "Taco Tuesday Menu",
      answer: "blurple",
      options: ["plot", "tulip", "frick"],
    },
  ],
};

console.dir(test);

// Timer function
function startCountDown(seconds) {
  test.timer = seconds - 1;

  const interval = setInterval(() => {
    test.timer--;
    document.getElementById("timer").innerHTML = test.timer + 1;
    if (test.timer < -1) {
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
  questionBox.innerHTML = test.questions[test.currentQuestion].question;
  // create a li for answer options.
  var questionLiOne = document.createElement("button");
  var questionLiTwo = document.createElement("button");
  var questionLiThree = document.createElement("button");
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
    document.createTextNode(test.questions[test.currentQuestion].options[0])
  );
  questionLiTwo.appendChild(
    document.createTextNode(test.questions[test.currentQuestion].options[1])
  );
  questionLiThree.appendChild(
    document.createTextNode(test.questions[test.currentQuestion].options[2])
  );

  // add function to list options.
  questionLiOne.addEventListener("click", function () {
    answerQuestion1(test.questions[test.currentQuestion].options[0]);
  });
  questionLiTwo.addEventListener("click", function () {
    answerQuestion1(test.questions[test.currentQuestion].options[1]);
  });
  questionLiThree.addEventListener("click", function () {
    answerQuestion1(test.questions[test.currentQuestion].options[2]);
  });
}
// console.log("answer question One click", test.questions[test.currentQuestion].answer);
function answerQuestion1(answerChoice) {
  // shows time left in console.log
  console.log(test.timer);
  // validate answer
  //  does answer match option.
  console.log(answerChoice, test.questions[test.currentQuestion].answer);
  let aq1 = test.questions[test.currentQuestion].answer === answerChoice;
  if (aq1) {
    console.log("was option 1 right? : ", aq1);
    test.currentQuestion++;
    console.log("Current Question Iteration: ", test.currentQuestion);
  } else {
    console.log("False deduction of 10 seconds");
    test.timer -= 10;
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
