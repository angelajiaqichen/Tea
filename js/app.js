// // make the bottom bar appear only when the user has scrolled to the bottom of the page
// // NOT working!
// window.addEventListener('scroll', function() {
//   var bottomBar = document.getElementById('bottom-bar');
//   var scrollPosition = window.innerHeight + window.pageYOffset;
//   if (scrollPosition >= document.body.offsetHeight) {
//     bottomBar.style.display = 'block';
//   } else {
//     bottomBar.style.display = 'none';
//   }
// });

const questions = [
    {
      question: "Which country is famous for its tea ceremony called 'Matcha'?",
      options: ["Japan", "India", "China", "Sri Lanka"],
      answer: "Japan"
    },
    {
      question: "What is the primary ingredient in chai tea?",
      options: ["Green Tea", "Black Tea", "Mint", "Ginger"],
      answer: "Black Tea"
    },
    {
      question: "What is the name of the traditional Chinese tea ceremony?",
      options: ["Chado", "Gongfu", "Yumcha", "Teaism"],
      answer: "Gongfu"
    },
    {
      question: "What is the name of the fermented tea popular in Mongolia?",
      options: ["Kombucha", "Pu-erh", "Butter Tea", "Yak Milk Tea"],
      answer: "Butter Tea"
    },
    {
      question: "What is the name of the famous tea-growing region in Sri Lanka?",
      options: ["Darjeeling", "Assam", "Nilgiri", "Ceylon"],
      answer: "Ceylon"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
//   const questionElement = document.getElementById("question");
  const questionElement = document.querySelector("#question");
  const optionsContainer = document.querySelector("#options-container");
//   console.log(optionsContainer.options)
//   console.log(document.querySelector(".option"))
//   console.log(document.querySelector("#reset"))
  const scoreElement = document.getElementById("score");
//   var selected = "";
//   console.log(op1.innerText)
//   op1.addEventListener("click", () => {
//     selected = op1.innerText;
//     console.log(selected);
//   })
  
  function showQuestion() {
    // console.log(currentQuestion)
    // console.log(questions[currentQuestion].question)
    questionElement.innerText = questions[currentQuestion].question; // set the question text
    optionsContainer.innerHTML = ""; // clear the options container
    for (let i = 0; i < questions[currentQuestion].options.length; i++) {
      const optionButton = document.createElement("button");
      optionButton.classList.add("option");
      optionButton.innerText = questions[currentQuestion].options[i];
      optionsContainer.appendChild(optionButton);
      optionButton.addEventListener("click", () => checkAnswer(optionButton));
    }
  }
  
  function checkAnswer(selectedButton) {
    console.log(questions[currentQuestion].answer)
    console.log(selectedButton.innerText)
    if (selectedButton.innerText == questions[currentQuestion].answer) {
      score++;
    }
    console.log(score)
    scoreElement.innerText = "Score: " + score;
    currentQuestion++;
    if (currentQuestion >= questions.length) {
      endGame();
    } else {
      showQuestion();
    }
  }
  
  function endGame() {
    questionElement.innerText = "Game Over! You scored " + score + " out of " + questions.length + " points.";
    optionsContainer.innerHTML = "";
    scoreElement.innerText = "";
  }
  
  function resetGame() {
    console.log("restarted the game")
    currentQuestion = 0;
    score = 0;
    showQuestion();
    scoreElement.innerText = "Score: " + score;
  }
  showQuestion();
  scoreElement.innerText = "Score: " + score;