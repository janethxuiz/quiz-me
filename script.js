var time = 75;
var currentQuestionIndex = 0;
var timerId;

var timerEl = document.getElementById("timer");
var startBtnEl = document.getElementById("start-btn");
var questionsElementEl = document.getElementById("questions");
var questionTitleEl = document.getElementById("question-title");
var answersEl = document.getElementById("answers");


var questions = [
    {
        title: "add question here later",
        answers: ["choice1", "choice2", "choice3", "choice"],
        correctAnswer: "choice2",

},
{
    title: "add question here later",
    answers: ["choice1", "choice2", "choice3", "choice"],
    correctAnswer: "choice2",

},
{
    title: "add question here later",
    answers: ["choice1", "choice2", "choice3", "choice"],
    correctAnswer: "choice2",

}
];

function startquiz() {
    timerId = setInterval(countDown, 1000);
    timerEl.textContent = time;
    showQuestion();
}

function countDown() {
    time--;
    timerEl.textContent = time;
    if (time <= 0 ) {
        endQuiz();
    }
}

function showQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    questionTitleEl.textContent = currentQuestion.title;
    currentQuestion.answers.forEach(function(choice, i){
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class", "choice");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.textContent = i + answers.text;
        answersEl.appendChild(choiceBtn);

    })
}

startBtnEl.onclick = startquiz;