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
