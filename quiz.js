const questionElement = document.querySelector(".question")
const quiz = document.querySelector(".quiz")
const welcome = document.querySelector(".welcome")
const subjects = document.querySelector(".quiz-subjects")
const app = document.querySelector(".app")
const back = document.querySelector(".back")
   
let data = ""
let subject = ""
let questionIndex = 0;


(function () {
    fetch('./quiz.json')
    .then(res => res.json())
    .then(output => {
        data = output
    })
})()

function goBack() {
    welcome.style.display = "block"
    quiz.style.display = "none"
}

Array.from(subjects.children).map(subject => {
        subject.addEventListener('click', (e)=> {
        welcome.style.display = "none"
        quiz.style.display = "block"
        app.style.paddingTop = "10px"
        app.style.paddingBottom = "50px"
        startQuiz(e.target.id)
    })
    }
    )

function startQuiz (id)  {
    subject = id
    showQuestion()
}

const showQuestion = () => {
    let currentQuestion = data[subject][questionIndex]
    questionElement.innerHTML = currentQuestion.question
    }
    



