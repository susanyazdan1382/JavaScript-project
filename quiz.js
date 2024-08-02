
const qdata = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    option1: "<javascript>",
    option2: "<js>",
    option3: "<script>",
    option4: "<src>",
    ans: "answer3",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    option1: "Both the head section and the body section are correct",
    option2: "The head section",
    option3: "The body section",
    option4: "None of the above",
    ans: "answer1",
  },
  {
    question: "How to stop an interval timer in Javascript?",
    option1: "Yes",
    option2: "Depends on the type of include",
    option3: "None of the above",
    option4: "ClearInterval",
    ans: "answer4",
  },
  {
    question: "Which object in Javascript doesn’t have a prototype?",
    option1: "Only one",
    option2: "Base Object",
    option3: "All Object",
    option4: "None of the above",
    ans: "answer2",
  },
  // {
  //   question: "What is the output of the following code snippet?  print(NaN === NaN);",
  //   option1: "true",
  //   option2: "Not false",
  //   option3: "false",
  //   option4: "A useful stuff",
  //   ans: "answer3",
  // },
  {
    question: "What does the Javascript “debugger” statement do?",
    option1: "it acts as a breakpoint in program",
    option2: "Yes",
    option3: "No",
    option4: "None of the above",
    ans: "answer1",
  },
  // {
  //   question: "What will be the output of the following code snippet? print(typeof(NaN));",
  //   option1: "Object",
  //   option2: "String",
  //   option3: "Number",
  //   option4: "All are unchangeable.",
  //   ans: "answer3",
  // },
  
  // {
  //   question:"What will be the output of the following code snippet?",
  //   option1: "Number",
  //   option2: "Object",
  //   option3: "String",
  //   option4: "None of the above",
  //   ans: "answer1",
  // },
];

// getting referrence
const questionContainer = document.querySelector("h2");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submitButton = document.querySelector("button");
const usersAnswer = document.querySelectorAll(".answer");
const scoreArea = document.querySelector("#ShowScore");


let qCount = 0;
let score = 0;

const mainFunc = () => {
  const list = qdata[qCount];
  questionContainer.innerText = list.question;
  option1.innerText = list.option1;
  option2.innerText = list.option2;
  option3.innerText = list.option3;
  option4.innerText = list.option4;
};

mainFunc();


const goCheckAnswer = () => {
  let answers;
  usersAnswer.forEach((data) => {
    if (data.checked) {
      answers = data.id;
    }
  });
  return answers;
};

const deselectAll = () => {
  usersAnswer.forEach((data) => {
    data.checked = false;
  });
};

submitButton.addEventListener("click", () => {
  const checkAnswer = goCheckAnswer();
  console.log(checkAnswer);

  if (checkAnswer === qdata[qCount].ans) {
    score++;
  }
  qCount++;
  deselectAll();
  if (qCount < qdata.length) {
    mainFunc();
  } else {
    scoreArea.style.display = "block";
    scoreArea.innerHTML = `
      <h3>Your score is ${score} / ${qdata.length} 🎉</h3>
      <button class='btn' onclick='location.reload()'>Play Again</button>
      `;
  }
});
