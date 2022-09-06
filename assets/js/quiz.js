var startButton = document.getElementById("start-btn");

var questionBoxEl = document.getElementById("question-box");
var answerButtons =  document.querySelectorAll('.answrBtn')

// var questions = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"];

var questionEl = document.getElementById("questions");
var answerButtonEl = document.getElementById("answer-btns");

var resultEl = document.getElementById("result");
var timerEl = document.getElementById("timer");

let nextQuestionIndex = 0
let userScore = 0
let timer = 30
timerEl.textContent = timer

let questions = [
    {
        question: "What is i++?",
        answers: {
            1: "Decrement the counter by one",
            2: "Increment the counter by one",
            3: "Mulitply the counter by one",
            4: "Divide the counter by one",
        },
        correctAnswer: "2"
    },
    {
    question: "What is the windows command to format page?",
    answers: {
        1: "Ctrl + F",
        2: "Shft + alt + D",
        3: "Shift + alt + F",
        4: "Ctrl + alt + F",
    },
    correctAnswer: "3"
    },
    {
        question: "How do you automatically create the basic structure of an HTML 5 file?",
        answers: {
            1: "Create HTML",
            2: "Load HTML5",
            3: "html5:",
            4: "html:5",
        },
        correctAnswer: "4"
    },
    {
        question: "What returns the value of the array at a given index?",
        answers: {
            1: "arrayValue[0]",
            2: "statusValue[0]",
            3: "statusChoices[0]",
            4: "arrayChoices[0]",
        correctAnswer: "3"    
        },
    },
    {
        question: "What is an object that can be used to loop through collections?",
        answers: {
            1: "iterator",
            2: "looper",
            3: "loop",
            4: "runner",
        correctAnswer: "1"
        },
    },
]
startButton.addEventListener('click', startGame)

function startGame() {
    // console.log("Started");
    startButton.classList.add("hidden");
    questionBoxEl.classList.remove("hidden");
    
    let quiz = questions[Math.floor(Math.random() * questions.length)]
    console.log(quiz);
    showQuestion();
    // console.log(questions); 
}

function showQuestion() {
    // get question using qiestions index. 
    // add content to html (question and answer)
    // after each question it is incremented by one
    // conditional logic to check if the game has ended.
    var currentQuestion = questions[nextQuestionIndex]
    console.log(currentQuestion.answers["1"])
    questionEl.textContent = currentQuestion.question
    
    for ( let i=0; i < answerButtons.length; i++) {
        // console.log(answerButtons[i]);
        let answerButton = answerButtons[i]
        answerButton.textContent = currentQuestion.answers[(i+1).toString()]
    }
}

function checkUserChoice(userChoice) {
    // return boolean
    var currentQuestion = questions[nextQuestionIndex]
    var correctAnswer = currentQuestion.correctAnswer
    if ( correctAnswer === userChoice ) {
        // console.log('Correct!');
        return true
    } else {
        // console.log('Incorrect');
        return false
    }
}

function displayAnswer(correct) {
    if ( correct ) {
        resultEl.textContent='Correct!'
    } else {
        resultEl.textContent='Incorrect'
    }
}

function updateScore(correct) {
    if (correct) {
        userScore++
    } else {
        // lose time from timer
        timer-=5
        timerEl.textContent = timer
    }

}

function endGame() {
    // check if game is over, if not then continue
    // could be boolean 
}

// function showQuestion() {
//     var questions = document.getElementById("questions");

//     // questionEl.innerText = questions;
//     // questions.answers.forEach(answers => {
//     //     var button = document.createElement("answer-btns")
//     //     button.innerText = answers.text 
//     //     button.class.add("btn");
//     // })
    
// }
function selectAnswer() {

}

// function showQuestion(questions) {
//     var output = [];
//     var answers;
//     for(var i=0; i>questions.length; i++){
//         answers = [];
//         for (letter in questions[i].answers){
//             answerButtonEl.push(
//                 '<label>'
//                 + '<input type="btn" name="questions'+i+'" value="'+letter+'">'
//                 + letter[i].answers[letter]
//                 + '<label>'
//             );
//         }
//         output.push(
//             '<div class="questions">' + questions[i].question + '</div>'
//             + '<div class="answers">' + answers.join('') + '</div>'
//         )
//     }
//     questionEl.innerHTML = output.join('');
// }

    // var questions = document.getElementById("questions");

    // questionEl.innerText = questions;
    // questions.answers.forEach(answers => {
    //     var button = document.createElement("answer-btns")
    //     button.innerText = answers.text 
    //     button.class.add("btn");
    // })
    

function addAnswerLstnr() {
    for ( let i=0; i < answerButtons.length; i++) {
        answerButtons[i].addEventListener('click', function(event) {
            // console.log(event.target.id)
            var isCorrect = checkUserChoice(event.target.id)
            displayAnswer(isCorrect)
            updateScore(isCorrect)
        })
    }
}

addAnswerLstnr();
    

