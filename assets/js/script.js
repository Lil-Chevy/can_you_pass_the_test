let questionBox = document.getElementByClass(".questionBox");
let btn = document.createElement("button");
let additionalSection = document.createElement("section");
let button = (document.createElement("button").innerHTML = "options");

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

// this function makes the first question visible
// function quiz() {
//     document.getElementsByClassName("question-one")[0].style.display= "block";
// };

// Timer function
function startCountDown(seconds) {
  let timer = seconds - 1;

  const interval = setInterval(() => {
    console.log(timer);
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
  // creating question box and adding ID
  const node = document.createElement("div");
  const questionNode = document.createTextNode("Question One");
  questionBox.appendChild(node);
  questionDiv.appendChild(additionalSection).innerHTML = "Question One";
  additionalSection.setAttribute("id", "questionBox");

  // creating paragraph within box to add question information.

  //   document.getElementById("question-box").createElement("p");
  //   questionDiv.appendChild(btn).innerHTML = "Answer";
  //   let bttn = document.createElement("button");
  //   bttn.innerHTML = test.currentQuestion.options;
  //   questionDiv.append(bttn);
  //   bttn.addEventListener(
  //     "click",
  //     answerQuestion(test.questions[currentQuestion].questions)
  //   );
  //   button.addEventListener("click", validateAnswer(options));

  //presents first question information.
}

function answerQuestion() {
  // validate answer
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
