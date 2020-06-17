// Need to reference html elements

const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

//Create some variables

// This is going to be an object
let currentQuestion = {};
// Delay before user can answer again 
let acceptingAnswers = false;
// starts at zero
let score = 0;
// starts at zero
let questionCounter = 0;
// A copy of the full question set and so that there will always be a unique question from the ones before.
let availableQuesions = [];

// Here are some sample questions searched from the internet 
let questions = [
    {
        // Each question has 4 answer choices and the correct answer below it in numerical format
        question: 'Inside which HTML element do we put the JavaScript??',
        choice1: '<script>',
        choice2: '<javascript>',
        choice3: '<js>',
        choice4: '<scripting>',
        answer: 1,
    },
    {
        question:
            "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "<script href='xxx.js'>",
        choice2: "<script name='xxx.js'>",
        choice3: "<script src='xxx.js'>",
        choice4: "<script file='xxx.js'>",
        answer: 3,
    },
    {
        question: " How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4,
    },
];

startGame = () => {
    // make sure this is all starting from 0
    //questionCounter is set to 0
    questionCounter = 0;
    // User score is set to 0
    score = 0;
    //available questions is set to include all the questions minus any question or questions that have already been answered
    availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign('/end.html');
    }
    // The question counter moves upwards as questions are answered 
    questionCounter++;
    //The way to acheive the variable questionIndex we use the Math.floor(Math.random) multiplied by the available questions remaining 
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    // Then retrieve the current question to be answered
    question.innerText = currentQuestion.question;

    // Next we have to add the choices for each question array
    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    //Next we will move the user on by fetching the next question
    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        getNewQuestion();
    });
});

startGame();