var startButton = document.getElementById("start-btn");

var questionBoxEl = document.getElementById("question-box");

// var questions = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"];

var questionEl = document.getElementById("questions");
var answerButtonEl = document.getElementById("answer-btns");

// var nextQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log("Started");
    startButton.classList.add("hidden");
    questionBoxEl.classList.remove("hidden");
    
    showQuestion(questions);
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

function showQuestion(questions) {
    var output = [];
    var answers;
    for(var i=0; i>questions.length; i++){
        answers = [];
        for (letter in questions[i].answers){
            answerButtonEl.push(
                '<label>'
                + '<input type="btn" name="questions'+i+'" value="'+letter+'">'
                + letter[i].answers[letter]
                + '<label>'
            );
        }
        output.push(
            '<div class="questions">' + questions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
        )
    }
    questionEl.innerHTML = output.join('');
}

    // var questions = document.getElementById("questions");

    // questionEl.innerText = questions;
    // questions.answers.forEach(answers => {
    //     var button = document.createElement("answer-btns")
    //     button.innerText = answers.text 
    //     button.class.add("btn");
    // })
    
var questions = [
    {
        question: "What is i++?",
        answers: {
            text: "Decrements the counter by one",
            text: "Increment the counter by one",
            text: "Mulitple the counter by one",
            text: "Divid the counter by one",
        },
        correctAnswer: "1"
    },
    {
    question: "What is the windows command to format page?",
    answers: {
        1: "Ctrl + F",
        2: "Shft + alt + D",
        3: "Shift + alt + F",
        4: "Ctrl + alt + F",
    },
    correctAnswer: "2"
    },
    {
        question: "How do you automatically create the basic structure of an HTML 5 file?",
        answers: {
            1: "Create HTML",
            2: "Load HTML5",
            3: "html5:",
            4: "html:5",
        },
        correctAnswer: "3"
    },
    {
        question: "What returns the value fo the array at a given index?",
        answers: {
            1: "arrayValue[0]",
            2: "statusValue[0]",
            3: "statusChoices[0]",
            4: "arrayChoices[0]",
        correctAnswer: "2"    
        },
    },
    {
        question: "What is an object that can be used to loop through collections?",
        answers: {
            1: "iterator",
            2: "looper",
            3: "loop",
            4: "runner",
        correctAnswer: "0"
        },
    },
]

