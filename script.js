var startBtnEl = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerEl = document.getElementById('question-container')
var questionsElementEl = document.getElementById('question')
var answerButtonsEl = document.getElementById('answers-button')

let shuffleQuestions, currentQuestion

var time = 100;
var currentQuestionIndex = -1;
var timerId = 0;
var score = 0;

function countDown() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
        endQuiz();
    }
}

function startQuiz()

function endQuiz
// function startQuiz() {
//     console.log('started')
//     startButton.classList.add('hide');
//     shuffleQuestions = questions.sort();
//     currentQuestion = 0;
//     questionContainerEl.classList.remove('hide');
//     showQuestion();
// }

// const startBtnEl = document.getElementById('start-btn')
// const nextButton = document.getElementById('next-btn')
// const questionContainerEl = document.getElementById('question-container')
// const questionsElementEl = document.getElementById('question')
// const answerButtonsEl = document.getElementById('answers-button')

// let shuffleQuestions, currentQuestion

// function startQuiz() {
//     console.log('started')
//     startBtnEl.classList.add('hide')
//     currentQuestion = 0
//     questionContainerEl.classList.remove('hide')
//     nextQuestion()
// }

// function nextQuestion() {
//     resetState()
//     showQuestion(shuffleQuestions[currentQuestion])
// }

// function showQuestion(question) {
//     questionsElementEl.innerText = question.question
//     question.answers.forEach(answers => {
//         const button = document.createElement('button')
//         button.innerText = answers.text
//         button.classList.add('btn')

//         if (answerButtonsEl.correct) {
//             button.dataset.correct = answers.correct
//         }
//         button.addEventListener('click', selectAnswers)
//         answerButtonsEl.appendChild(button)
//     })
// }

// function resetState() {
//     nextButton.classList.add('hide')

//     while (answerButtonsEl.firstChild) {
//         answerButtonsEl.removeChild
//             (answerButtonsEl.firstChild)
//     }
// }

// function selectAnswers(e) {
//     const selectButton = e.target
//     const correct = selectButton.dataset.correct
//     setStatusClass(document.body, correct)
//     Array.from(answerButtonsEl.children).forEach(button => {
//         setStatusClass(button, button.dataset.correct)
//     })
//     if (shuffleQuestions.length > currentQuestion + 1) {
//         nextButton.classList.add('hide')
//     } else {
//         startButton.innerText = 'Restar'
//         startButton.classList.remove('hide')
//     }
// }

// function setStatusClass(element, correct) {
//     clearStatusClass(element)
//     if (correct) {
//         element.classList.add('correct')
//     } else {
//         element.classList.add('wrong')
//     }
// }

// function clearStatusClass(element) {
//     element.classList.remove('correct')
//     element.classList.remove('wrong')
// }

// // These are our questions
// var questions = [
//     {
//         title: "How many letters are in the alphabet",
//         answers: ["26", "32", "19", "25"],
//         correctAnswer: "26",
//     },
//     {
//         title: "What color is a Stop Sign",
//         answers: ["Yellow", "Blue", "Red", "Black"],
//         correctAnswer: "Red",
//     },
//     {
//         title: "If you are 8 now how old will you be in 7 years",
//         answers: ["12", "21", "19", "15"],
//         correctAnswer: "15",
//     },
//     {
//         title: "Is it Color or Colour",
//         answers: ["Red", "Color", "Colour", "Rainbow"],
//         correctAnswer: "Rainbow",
//     },
// ];

// startBtnEl.addEventListener('click', startQuiz);
// nextButton.addEventListener('click', () => {
//     currentQuestion++
//     nextQuestion()
// })