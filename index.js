const questions = [
  {
    question:
      "A flashing red traffic light signifies that a driver should do what?",
    answers: [
      { text: "stop", correct: true },
      { text: "speed up", correct: false },
      { text: "proceed with caution", correct: false },
      { text: "honk the horn", correct: false },
    ],
  },
  {
    question: "A knish is traditionally stuffed with what filling?",
    answers: [
      { text: "potato", correct: true },
      { text: "creamed corn", correct: false },
      { text: "lemon custard", correct: false },
      { text: "raspberry jelly", correct: false },
    ],
  },
  {
    question: "A pita is a type of what?",
    answers: [
      { text: "fresh fruit", correct: false },
      { text: "flat bread", correct: true },
      { text: "French tart", correct: false },
      { text: "friend bean dip", correct: false },
    ],
  },
  {
    question:
      "A portrait that comically exaggerates a person's physical traits is called a what?",
    answers: [
      { text: "landscape", correct: false },
      { text: "caricature", correct: true },
      { text: "still life", correct: false },
      { text: "Impressionism", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-btns");
const nextBtn = document.getElementById("next-btn");

let currentQuestionNumber = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestions();
}

function showQuestions() {
  resetPreviousQuestions();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = `${questionNumber}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach((answer) => {
    const answerButton = document.createElement("button");
    answerButton.innerHTML = answer.text;
    answerButton.classList.add("btn");
    answerBtn.appendChild(answerButton);

    console.log(answer.correct);
    if (answer.correct) {
      answerButton.dataset.correct = answer.correct;
    } else {
      answerButton.dataset.correct = false;
    }
    answerButton.addEventListener("click", showCorrectAnswer);
  });
}

function resetPreviousQuestions() {
  nextBtn.style.display = "none";
  while (answerBtn.firstChild) {
    answerBtn.removeChild(answerBtn.firstChild);
  }
}

function showCorrectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrectAns = selectedBtn.dataset.correct;
  // console.log(isCorrectAns);
  if (isCorrectAns === "true") {
    selectedBtn.classList.add("correct");
    // selectedBtn.disabled = true;
    score++;
  } else if (isCorrectAns === "false") {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerBtn.children).forEach((answer) => {
    if (answer.dataset.correct === "true") {
      answer.classList.add("correct");
    }
    answer.disabled = true;
  });

  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {

  
});
startQuiz();
