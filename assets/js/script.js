let questionBox = document.querySelector(".questionBox");
let optionDisplay = document.querySelector(".optionDisplay");
let questionButton1 = document.createElement("button");
let questionButton2 = document.createElement("button");
let questionButton3 = document.createElement("button");
let backButton = document.querySelector("#backButton");
let highScoreBox = document.querySelector(".displayHighScore");

const test = {
  timer: 0,
  currentQuestion: 0,
  currentOptions: 0,
  questions: [
    {
      question:
        "What below shows a variable called carName and has the value of Volvo",
      answer: "var carName = volvo;",
      options: [
        "var volov = car",
        "carvolvo = var car",
        "var carName = volvo;",
      ],
    },
    {
      question: "What does a loop do?",
      answer:
        "Loop helps us to execute a task repeatedly. Instead of manually writing the same functions, we can write loops to do that for us.",
      options: [
        "Loop helps us to execute a task repeatedly. Instead of manually writing the same functions, we can write loops to do that for us.",
        "it's a funny word",
        "is an array",
      ],
    },
    {
      question: "What does /'let'/ do?",
      answer: "Declares a variable that cannot be redeclared",
      options: [
        "executes a function",
        "Declares a variable that cannot be redeclared",
        " executes e=mc2",
      ],
    },
    {
      question: "What is the equivalent of i = i + i; ?",
      answer: "i++",
      options: ["i++", "i!", "i#>.plusi"],
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
  startCountDown(30);
  // makes button.
  questionButton1.remove();
  //how do i iterate over questions
  questionBox.innerHTML = test.questions[test.currentQuestion].question;
  // create a li for answer options.

  // attach class to li
  questionButton1.classList.add("answerOptions");
  questionButton2.classList.add("answerOptions");
  questionButton3.classList.add("answerOptions");

  // attach answer options to ul
  optionDisplay.appendChild(questionButton1);
  optionDisplay.appendChild(questionButton2);
  optionDisplay.appendChild(questionButton3);

  // put answers text in li
  questionButton1.appendChild(
    document.createTextNode(test.questions[test.currentQuestion].options[0])
  );
  questionButton2.appendChild(
    document.createTextNode(test.questions[test.currentQuestion].options[1])
  );
  questionButton3.appendChild(
    document.createTextNode(test.questions[test.currentQuestion].options[2])
  );

  // add function to list options.
  questionButton1.addEventListener("click", function () {
    answerQuestion1(test.questions[test.currentQuestion].options[0]);
  });
  questionButton2.addEventListener("click", function () {
    answerQuestion1(test.questions[test.currentQuestion].options[1]);
  });
  questionButton3.addEventListener("click", function () {
    answerQuestion1(test.questions[test.currentQuestion].options[2]);
  });
}

function answerQuestion1(answerChoice) {
  // shows time left in console.log
  console.log("current Time = ", test.timer);
  // validate answer
  //  does answer match option.
  console.log(answerChoice, test.questions[test.currentQuestion].answer);
  let aq1 = test.questions[test.currentQuestion].answer === answerChoice;
  if (aq1) {
    console.log("was option 1 right? : ", aq1);
    test.currentQuestion++;
    // remove older buttons
    questionButton1.innerHTML = "";
    questionButton2.innerHTML = "";
    questionButton3.innerHTML = "";

    test.currentOptions++;
    console.log("Current Question Iteration: ", test.currentQuestion);
    futureQuestions();
  } else {
    console.log("False deduction of 10 seconds");
    let deductedTime = (test.timer -= 10);
    console.log(
      "Current Time after Deduction for incorrect answer: ",
      deductedTime
    );
  }
  // to next question if other option is selected remove 10 seconds
  // does the answer provide match answer for the question
  // if yes:.
  // if last question, call end test.
  // else progress next question
  // else no: display wrong message
}
function futureQuestions() {
  // add new question to questionBox
  if (test.currentQuestion == 4) {
    endTest();
    console.log("<<<<<<<Move to End Test>>>>>>>>");
  } else {
    questionBox.innerHTML = test.questions[test.currentQuestion].question;
    // add new buttons
    optionDisplay.appendChild(questionButton1);
    optionDisplay.appendChild(questionButton2);
    optionDisplay.appendChild(questionButton3);

    // put answers text in li
    questionButton1.appendChild(
      document.createTextNode(test.questions[test.currentQuestion].options[0])
    );

    questionButton2.appendChild(
      document.createTextNode(test.questions[test.currentQuestion].options[1])
    );
    questionButton3.appendChild(
      document.createTextNode(test.questions[test.currentQuestion].options[2])
    );
  }
}

function endTest() {
  // stop the timer.
  if (test.currentQuestion == 4) {
    const interval = setInterval(() => {
      test.timer++;
      window.location.href = "highscore.html";
      document.getElementById("timer").innerHTML = test.timer + 1;
    }, 1000);
  }
  let addHighScore = document.querySelector(".timer-count-down");
  localStorage.setItem("HighScore", test.timer);
}
