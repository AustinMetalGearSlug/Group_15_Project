const questions = [
  {
    question: "Where is Guayaki yerba maté grown?",
    options: ["Asia", "South America", "Australia"],
    labels: ["South America"],
    answered: false,
    userAnswer: null
  },
  {
    question: "How often is yerba maté harvested?",
    options: ["Every 6-9 months", "Every 5 years", "Every 1-3 years"],
    labels: ["Every 1-3 years"],
    answered: false,
    userAnswer: null
  },
  {
    question: "How tall do yerba maté trees grow in the wild?",
    options: ["Up to 100 feet", "Up to 50 feet", "Up to 30 feet"],
    labels: ["Up to 100 feet"],
    answered: false,
    userAnswer: null
  },
  {
    question: "What kind of plant is yerba maté?",
    options: ["Green tea","Holly","Sage"],
    labels: ["Holly"],
    answered: false,
    userAnswer: null
  },
  {
    question: "Which indigenous cultures cultivated, and enjoyed yerba maté?",
    options: ["The Yanomami, Wayuu, and Tikuna…" , "The Mayans, Olmec, Aztec, and Inca…" , "The Guaraní, Tupí, Jibaro, Quechua, and Kaingang… "],
    labels: ["The Guaraní, Tupí, Jibaro, Quechua, and Kaingang…"],
    answered: false,
    userAnswer: null
  }
];
 

const cans = [...document.querySelectorAll('.can')];
const star = document.getElementById('star');
const resultDiv = document.getElementById('result');
const yellowOverlay = document.getElementById('yellow-overlay');
const quizContent = document.getElementById('quiz-content');
const questionText = document.getElementById('question-text');
const answersDiv = document.getElementById('answers');
const closeBtn = document.getElementById('close-btn');

function showModal(qidx) {
  yellowOverlay.classList.add('active');
  questionText.textContent = questions[qidx].question;
  answersDiv.innerHTML = '';
  questions[qidx].options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = () => {
      questions[qidx].answered = true;
      questions[qidx].userAnswer = idx;
      cans[qidx].classList.add('answered');
      yellowOverlay.classList.remove('active');
      cans[qidx].classList.remove('zooming');
      setTimeout(() => {
        quizContent.style.opacity = 0;
        checkAllAnswered();
      }, 500);
    };
    answersDiv.appendChild(btn);
  });
  quizContent.style.opacity = 1;
}

cans.forEach((can, idx) => {
  can.addEventListener('click', () => {
    if (questions[idx].answered) return;
    cans.forEach(c => c.classList.remove('zooming'));
    can.classList.add('zooming');
    showModal(idx);
  });
});

closeBtn.onclick = function() {
  yellowOverlay.classList.remove('active');
  cans.forEach(c => c.classList.remove('zooming'));
  setTimeout(() => {
    quizContent.style.opacity = 0;
  }, 500);
};

function checkAllAnswered() {
  if (questions.every(q => q.answered)) {
    star.classList.add('enabled');
    star.classList.remove('disabled');
    star.style.cursor = 'pointer';
    star.onclick = showResult;
  }
}

function showResult() {
 
  resultDiv.classList.remove('hidden');
}
// Add vertical borders on load
window.addEventListener('DOMContentLoaded', () => {
  const left = document.createElement('div');
  left.className = "border-left";
  const right = document.createElement('div');
  right.className = "border-right";
  document.querySelector('.border-wrap').append(left, right);
});
