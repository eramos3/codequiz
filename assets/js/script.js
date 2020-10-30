// variables to select certain displays
var displayOne = document.querySelector(".fist-display");
var displayTwo = document.querySelector(".questions");
var displayThree = document.querySelector(".saved-score");
var displayFour = document.querySelector(".score-screen");
var showQuestion = document.querySelector("#current-question");
var rightWrong = document.querySelector("#choice-value")

// choice variables
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
        answer: a
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
    displayOne.setAttribute("style", "display:none");
    displayTwo.removeAttribute("style", "display:none");
    // starts countdown
    count();
    // gets questions from array
    currentQuestion = 0;
    for(i=0; i<questions.length;i++){
        showQuestion.textContent = currentQuestion[i].question;
        choiceA.textContent = questions[i].a;
        choiceB.textContent = questions[i].b;
        choiceC.textContent = questions[i].c;
        choiceD.textContent = questions[i].d;
        console.log(showQuestion.textContent)

        // choiceA.onclick = function(){
        //     showQuestion.textContent = questions[1].question;
            
        // }

        // questions[0].a.addEventListener('mousedown', function(){
        //     questions[0].
        // });
        
        // var checkChoice = function(){
        //     if(choiceA ==questions[i].answer||choiceB==questions[i].answer||choiceC==questions[i].answer||choiceD==questions[i].answer) {
        //         rightWrong.textContent = "Correct";
        //     } else {
        //         rightWrong.textContent = "Wrong";
        //         seconds = seconds - 20;
        //     };
        // }
    }
};

var endQuiz = function () {
    // hide question display and show input field for initials
    displayTwo.setAttribute("style", "display:none");
    displayThree.removeAttribute("style", "display:none");
    rightWrong.setAttribute("style", "display:none");
};

// selected timer id, set timer to 75 sec and made function to start countdown
var seconds = 75;
var countDown = document.querySelector("#set-timer");
countDown.textContent = seconds;
var count = function () {
    var decrease = setInterval(function () {
        seconds = seconds - 1;
        countDown.textContent = seconds;
        // when seconds reach 0 end the timer and notify time is over.
        if (seconds <= 0) {
            clearInterval(decrease);
            window.alert("Time is Up");
            // hide question display and show input field for initials
            endQuiz();
        }


    }, 1000);
};

// event listeners go here
displayOne.addEventListener("click", startQuiz)
