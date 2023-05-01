const allQuestions = [
    {
      question: "Which country is famous for its tea ceremony called 'Matcha'?",
      options: ["Japan", "India", "China", "Sri Lanka"],
      answer: "Japan",
      image: "img/matcha.png"
    },
    {
      question: "What is the primary ingredient in chai tea?",
      options: ["Green Tea", "Black Tea", "Mint", "Ginger"],
      answer: "Black Tea",
      image: "img/chai.png"
    },
    {
      question: "What is the name of the traditional Chinese tea ceremony?",
      options: ["Chado", "Gongfu", "Yumcha", "Teaism"],
      answer: "Gongfu",
      image: "img/chinesetea.png"
    },
    {
      question: "What is the name of the fermented tea popular in Mongolia?",
      options: ["Kombucha", "Pu-erh", "Butter Tea", "Yak Milk Tea"],
      answer: "Butter Tea",
      image: "img/mongoliantea.png"
    },
    {
      question: "What is the name of the famous tea-growing region in Sri Lanka?",
      options: ["Darjeeling", "Assam", "Nilgiri", "Ceylon"],
      answer: "Ceylon",
      image: "img/ceylon.png"
    },
    {
        question: "What is the name of the traditional Japanese tea ceremony?",
        options: ["Chado", "Gongfu", "Yumcha", "Teaism"],
        answer: "Chado",
        image: "img/matcha2.png"
      },
      {
        question: "What is the name of the famous tea-growing region in India?",
        options: ["Darjeeling", "Assam", "Nilgiri", "Ceylon"],
        answer: "Darjeeling",
        image: "img/darjeeling.png"
      },
      {
        question: "What is the name of the Chinese tea that is dried over smoking pine fires?",
        options: ["Dragonwell", "Lapsang Souchong", "Tie Guan Yin", "Keemun"],
        answer: "Lapsang Souchong",
        image: "img/fire.png"
      },
      {
        question: "What is the name of the type of tea that is fermented and aged, and is popular in China and Tibet?",
        options: ["Kombucha", "Pu-erh", "Butter Tea", "Yak Milk Tea"],
        answer: "Pu-erh",
        image: "img/puer.png"
      },
      {
        question: "What is the name of the famous tea that is grown in the Nilgiri Hills of India?",
        options: ["Darjeeling", "Assam", "Nilgiri", "Ceylon"],
        answer: "Nilgiri",
        image: "img/nilgiri.png"
      },
      {
        question: "What is the name of the tea that is traditionally served with dim sum in Chinese cuisine?",
        options: ["Jasmine Tea", "Oolong Tea", "Green Tea", "Pu-erh Tea"],
        answer: "Pu-erh Tea",
        image: "img/puer.png"
      },
      {
        question: "What is the name of the tea that is blended with bergamot oil to make Earl Grey tea?",
        options: ["Darjeeling", "Assam", "Nilgiri", "Ceylon"],
        answer: "Darjeeling",
        image: "img/darjeeling.png"
      },
      {
        question: "What is the name of the type of Japanese tea that is powdered and whisked into a frothy emulsion?",
        options: ["Sencha", "Gyokuro", "Matcha", "Hojicha"],
        answer: "Matcha",
        image: "img/matcha.png"
      },
      {
        question: "What is the name of the type of tea that is commonly used to make Moroccan mint tea?",
        options: ["Green Tea", "Black Tea", "Oolong Tea", "Gunpowder Tea"],
        answer: "Gunpowder Tea",
        image: "img/gunpowder.png"
      },
      {
        question: "What is the name of the type of tea that is made from the leaves of the South African rooibos plant?",
        options: ["Black Tea", "Green Tea", "Oolong Tea", "Rooibos Tea"],
        answer: "Rooibos Tea",
        image: "img/rooibos.png"
    }
  ];

  function getRandomQuestions(numQuestions) {
    // Shuffle the questions array using "Fisher-Yates shuffle algorithm"
    for (let i = allQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
    }
  
    // Return the first numQuestions questions in the shuffled array
    return allQuestions.slice(0, numQuestions);
  }
  
  const questions = getRandomQuestions(5);
  let currentQuestion = 0;
  let score = 0;
  
//   const questionElement = document.getElementById("question");
  const questionElement = document.querySelector("#question");
  const optionsContainer = document.querySelector("#options-container");
  const imageElement = document.querySelector("#question-image");
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
    imageElement.src = questions[currentQuestion].image;
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
    // console.log(score)
    scoreElement.innerText = "Score: " + score;
    currentQuestion++;
    if (currentQuestion >= questions.length) {
      endGame();
    } else {
      showQuestion();
    }
  }
  
  function endGame() {
    questionElement.innerText = "Game Over! You scored " + score + " out of " + questions.length + " points." + " \n Do you want to play again?";
    optionsContainer.innerHTML = "";
    scoreElement.innerText = "";
    imageElement.style.display = "none"; // hide the image container
  }
  
//   function resetGame() {
//     console.log("restarted the game")
//     const questions = getRandomQuestions(5);
//     // console.log(questions)
//     currentQuestion = 0;
//     score = 0;
//     showQuestion();
//     // console.log(questions[currentQuestion].question)
//     // console.log(questionElement)
//     scoreElement.innerText = "Score: " + score;
//   }

function startGame() {
    window.location.href = "game.html";
}

  function resetGame() {
    window.location.reload();
  }
  showQuestion();
  scoreElement.innerText = "Score: " + score;