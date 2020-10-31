// variables to select certain displays
var startBtn = document.querySelector("#start");
var displayOne = document.querySelector(".first-display");
var displayTwo = document.querySelector(".questions");
var displayThree = document.querySelector(".saved-score");
var displayFour = document.querySelector(".score-screen");
var showQuestion = document.querySelector("#current-question");
var rightWrong = document.querySelector("#choice-value");
var saveUser = document.querySelector("#save-score");
var userInitials = document.querySelector("#initials");
var userHighscore = document.querySelector("#score");
var viewScoreBtn = document.querySelector("#view-scores");
var showTimer = document.querySelector(".timer");
// variable to select final score
var finalScore = document.querySelector("#final-score")
// sets seconds to 75
var seconds = 75;

// choice variables to replace answer choices
var choiceA = document.querySelector("#a");
var choiceB = document.querySelector("#b");
var choiceC = document.querySelector("#c");
var choiceD = document.querySelector("#d");

// array with objects that holds a question in each object
var questions = [
    {
        question: "Is JavaScript a case-sensitive language?",
        a: "true",
        b: "false",
        c: "don't know",
        d: "skip",
        answer: "a"
    },

    {
        question: "How can you get the type of arguments passed to a function?",
        a: "using typeof operator",
        b: "using getType function",
        c: "Both of the above",
        d: "None of the above",
        answer: "a"
    },

    {
        question: "Which of the following type of variable is visible only within a function where it is defined?",
        a: "global variable",
        b: "local variable",
        c: "Both of the above",
        d: "None of the above",
        answer: "b"
    },

    {
        question: "Which of the following function of Number object forces a number to display in exponential notation?",
        a: "toExponential()",
        b: "toFixed()",
        c: "toPrecision()",
        d: "toLocaleString()",
        answer: "a"
    },
    {
        question: "Which of the following function of Number object returns a string value version of the current number?",
        a: "toString()",
        b: "toFixed()",
        c: "toLocaleString()",
        c: "toLocaleString()",
        d: "toPrecision()",
        answer: "a"
    },
    {
        question: "Which of the following is the correct syntax to display 'Letsfindcourse' in an alert box using JavaScript?",
        a: 'alert-box("Letsfindcourse")',
        b: "alert('Letsfindcourse')",
        c: "msgbox('Letsfindcourse');",
        d: "confirm('Letsfindcourse');",
        answer: "b"
    },
    {
        question: "Which of them is not the looping structures in JavaScript?",
        a: "for",
        b: "forwhich",
        c: "while",
        d: "dowhile",
        answer: "b"
    },

];

// functions go here
var setUp = function () {
    displayTwo.setAttribute("style", "display:none");
    displayThree.setAttribute("style", "display:none");
    displayFour.setAttribute("style", "display:none");
};
setUp();

var startQuiz = function () {
    viewScoreBtn.setAttribute("style", "display:none");
    displayOne.setAttribute("style", "display:none");
    displayTwo.removeAttribute("style", "display:none");
    // starts countdown
    count();
    // gets question from array
    displayQuestion();
};

// made function to get question from array 
var displayQuestion = function () {
    if (currentQuestion > (questions.length - 1)) {
        endQuiz();
    }  else {
        for (i = 0; i < questions.length; i++) {
            showQuestion.textContent = questions[currentQuestion].question;
            choiceA.textContent = questions[currentQuestion].a;
            choiceB.textContent = questions[currentQuestion].b;
            choiceC.textContent = questions[currentQuestion].c;
            choiceD.textContent = questions[currentQuestion].d;
        }
    }
};
// sets current question to
var currentQuestion = 0;

// made function to check the on click button with the value of the answer of each question
var checkChoice = function (event) {
    if (event == questions[currentQuestion].answer) {
        rightWrong.textContent = "Correct";
        currentQuestion++;
        displayQuestion();
    } else {
        rightWrong.textContent = "Wrong";
        seconds = seconds - 20;
        currentQuestion++;
        displayQuestion();
    };
}

var endQuiz = function () {
    showTimer.setAttribute("style", "display:none");
    // makes left over seconds equal to the score
    var score = seconds;
    // hide question display and show input field for initials
    displayTwo.setAttribute("style", "display:none");
    displayThree.removeAttribute("style", "display:none");
    rightWrong.setAttribute("style", "display:none");
    if(score <= 0){
        score = 0;
    }
    finalScore.textContent = score;
    getHighScore();

};
// selected timer id, and made function to start countdown
var countDown = document.querySelector("#set-timer");

var count = function(){
    // create interval and check to see if timer reached 0 then stops timer
    var decrease = setInterval(function() {
        if (seconds < 2){
            // clears interval
            clearInterval(decrease);
            endQuiz();
        }
        seconds = seconds - 1;
        countDown.textContent = seconds;
    }, 1000);
}

// local storage code
var getHighScore = function () {
    displayFour.removeAttribute("style", "display:none");
    // gets last initial and score from local storage
    var initial = localStorage.getItem("initial");
    var highscore = localStorage.getItem("highscore");

    // if null, return early
    if (initial === null || highscore === null) {
        return;
    }
    // set text of initial span and highscore span using local storage values
    userInitials.textContent = initial;
    userHighscore.textContent = highscore;
    console.log(userHighscore.textContent);
}

// save highscore function
var saveScore = function (event) {
    event.preventDefault();
    var initial = document.querySelector("#initial").value;
    var highscore = document.querySelector("#final-score").textContent;
    console.log(highscore);

    if (initial === "") {
        alert("Initials cannot be blank");
    } else {
        // save initial and score to localstorage
        localStorage.setItem("initial", initial);
        localStorage.setItem("highscore", highscore);
        // show last high score
        getHighScore();
    }
    displayThree.setAttribute("style", "display:none");
    displayFour.removeAttribute("style", "display:none");
}

var viewScore = function () {
    displayOne.setAttribute("style", "display:none");
    rightWrong.setAttribute("style", "display:none");
    getHighScore();
}

// event listeners go here
startBtn.addEventListener("click", startQuiz);
saveUser.addEventListener("click", saveScore);
viewScoreBtn.addEventListener("click", viewScore)
