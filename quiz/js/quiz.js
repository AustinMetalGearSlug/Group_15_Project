const questions = [
  {
    question: "How do you usually drink yerba mate?",
    options: ["With friends", "Alone", "At a cafe"],
    labels: ["social", "solo", "urban"],
    answered: false,
    userAnswer: null
  },
  {
    question: "Which flavor appeals to you?",
    options: ["Citrus", "Berry", "Traditional"],
    labels: ["fresh", "sweet", "classic"],
    answered: false,
    userAnswer: null
  },
  {
    question: "What's your preferred energy level?",
    options: ["Chill", "Focused", "Energized"],
    labels: ["calm", "focus", "power"],
    answered: false,
    userAnswer: null
  },
  {
    question: "Pick a time of day:",
    options: ["Morning", "Afternoon", "Night"],
    labels: ["start", "mid", "late"],
    answered: false,
    userAnswer: null
  },
  {
    question: "What's your favorite activity?",
    options: ["Sports", "Studying", "Relaxing"],
    labels: ["active", "studious", "rest"],
    answered: false,
    userAnswer: null
  }
];

const twoInputResults = {
  "social-calm":   "You’re a chill socialite! Mate is your excuse for good company and good vibes.",
  "social-focus":  "Social and focused—you lead group study sessions!",
  "social-power":  "You’re the spark of the party. Friends and energy—what a combo!",
  "solo-calm":     "You recharge alone with mate, embracing peace and reflection.",
  "solo-focus":    "Solo and focused—you get things done on your own terms.",
  "solo-power":    "You power through the day, independently unstoppable!",
  "urban-calm":    "Urban explorer, chill mood. You sip mate while people-watching at your favorite café.",
  "urban-focus":   "Café crawler with a focused mindset. Work, art, life—you're doing it all.",
  "urban-power":   "The city can barely keep up! You energize your urban adventures with mate.",
};

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
  // Use Q1 and Q3 for output (indexes 0 and 2)
  const key1 = questions[0].labels[questions[0].userAnswer];
  const key2 = questions[2].labels[questions[2].userAnswer];
  const resultKey = `${key1}-${key2}`;
  let resultText = twoInputResults[resultKey] ||
    "You’ve got a mate style all your own!";

  // Append favorite flavor (Q2, index 1)
  const flavor = questions[1].options[questions[1].userAnswer];
  resultText += ` <br><span style="font-size:1.15em;">Your favorite flavor is <b>${flavor}</b>.</span>`;

  let choicesText = `<br><div style="font-size:1.1em">Your choices:</div>`;
  questions.forEach((q, i) => {
    choicesText += `<div><b>Q${i+1}:</b> ${q.options[q.userAnswer]}</div>`;
  });
  resultDiv.innerHTML = `<div>${resultText}</div>` + choicesText;
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
