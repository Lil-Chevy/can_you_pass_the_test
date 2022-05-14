const test = {
    startTime:undefined,
    endTime:undefined,

    currentQuestion: 0,
    questions: [{
        questions: 'what am the sky',
        answer: "blurple",
        options: [
            "plot",
            "tulip",
            "blurple",
        ]
    }]
};



// this function makes the first question visible
function quiz() {
    document.getElementsByClassName("question-one")[0].style.display= "block";
};

// Timer function
function startCountDown(seconds) {
    let timer = seconds;

    const interval = setInterval(() => {
        console.log(timer);
        timer--;

        if (timer < 0){
            alert("Time is up! You did not finish the test in time. Please try again when you are ready!");
            clearInterval(interval);
        }
    }, 1000);
}

function start() {
    // click the button starts the timer.
    startCountDown(5);
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

function endTest(){
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