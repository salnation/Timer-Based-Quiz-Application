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

