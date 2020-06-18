const highScoresList = document.getElementById("highScoresList");
//JSON is a syntax for storing and exchanging data
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// using innerHTML property to return the HTML content of the element
highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");