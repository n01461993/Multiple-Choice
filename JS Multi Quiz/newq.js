const loginForm = document.getElementById('loginForm');
  
      loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
  
        // "Fake Authentication" Login 
        if (username === 'Gabe' && password === 'webdev1') {
          alert('Login successful!');
          startQuiz(); // Call function to start the quiz
        } else {
          alert('Incorrect username or password. Please try again.');
        }
      });
  
      function startQuiz() {
        // Once logged in successfully, redirects to quiz page
        window.location.href = 'newnewquiz.html';
      }

const startButton = document.getElementById('submit')
const nextQuestion = document.getElementById('next-btn')
const login = document.getElementById('loginForm')
const quizQuestions = document.getElementById('questions-list')
const questionShow = document.getElementById('question')
const answersShow = document.getElementById('answers-buttons')

let currentQuestion
let score
let shuffledQuestions


startButton.addEventListener('click', startQuiz)
nextQuestion.addEventListener('click', () => {
    if(currentQuestion < questions.length){
        showResults()
    }else{
        startQuiz()
    }
})
//Function to start the quiz and hide login form
function startQuiz(){
    console.log('Quiz started')
    login.classList.add('hide')
    quizQuestions.classList.remove('hide')
    let question = questions[currentQuestion]
    currentQuestion = 0
    score = 0
    selectNextQuestion()
}
//Show question function and show answers, with correct answer dataset
function showQuestion(question) {
    let current = questions[currentQuestion];
    questionShow.textContent = current.question;
    current.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answersShow.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', checkAnswer)
        answersShow.appendChild(button)
    });
}
//Function to clear the questions and show current question in the index
function selectNextQuestion(){
    resetQuestions()
    showQuestion(questions[currentQuestion].question)
}

function resetQuestions() {
    clearStatusClass(document.body)
    nextQuestion.classList.add('hide')
    while (answersShow.firstChild) {
        answersShow.removeChild
        (answersShow.firstChild)
    }
}
//Targets the buttons to correct or incorrect, and display next button for next question
function checkAnswer(e){
    const answerButton = e.target
    const correct = answerButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answersShow.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (currentQuestion < questions.length){
        nextQuestion.classList.remove('hide')
    } else{
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    
}
//Sets the correct or incorrect values to the buttons
function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        score++;
    } else {
        element.classList.add('wrong')
    }
}
//Clearing the status from the elements
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
//Display the score of questions correct out of all question, and clear questions
function showScore(){
    resetQuestions()
    questionShow.innerHTML = `You scored ${score} out of ${questions.lenth}.`
}
//Function to determine next question or show the final result. 
function showResults() {
    currentQuestion++
    if(currentQuestion < questions.length){
        selectNextQuestion()
    }else{
        showScore()
    }
}


//Array of questions and answers. 
const questions = [
    {
        question: "What year was Humber College founded?",
        answers: [
            { text:"1950", correct: false},
            { text:"1967", correct: true},
            { text:"1980", correct: false},
            { text:"2001", correct: false}
        ]
        
    },
    {
        question: "How many students are currently enrolled at Humber College?",
        answers: [
            { text:"35,000", correct: false},
            { text:"26,700", correct: false},
            { text:"79,795", correct: false},
            { text:"86,000", correct: true}
        ]
    },
    {
        question: "Who is Humber's mascot?",
        answers: [
            { text:"Howie the Hawk", correct: true},
            { text:"Steven the Snake", correct: false},
            { text:"Barry the Bull", correct: false},
            { text:"Peter the Pelican", correct: false}
        ]
    },
    {
        question: "Which city is the Humber North Campus located?",
        answers: [
            { text:"Brampton", correct: false},
            { text:"Mississauga", correct: false},
            { text:"Etobicoke", correct: true},
            { text:"Waterloo", correct: false}
        ]
    },
    

];
