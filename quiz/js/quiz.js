const questions = [
  {
    question: "Which country is most famous for yerba mate?",
    options: ["Argentina", "Japan", "Norway"],
    correct: 0,
    answered: false
  },
  {
    question: "What is the traditional container for drinking mate?",
    options: ["Gourd", "Mug", "Glass"],
    correct: 0,
    answered: false
  },
  {
    question: "What does 'yerba' mean in Spanish?",
    options: ["Leaf", "Herb", "Tea"],
    correct: 1,
    answered: false
  },
  {
    question: "Yerba mate contains which stimulant?",
    options: ["Caffeine", "Theobromine", "Both"],
    correct: 2,
    answered: false
  },
  {
    question: "Which vitamin is found in yerba mate?",
    options: ["Vitamin C", "Vitamin B", "Vitamin K"],
    correct: 1,
    answered: false
  }
];

const cans = [...document.querySelectorAll('.can')];
const star = document.getElementById('star');
const resultDiv = document.getElementById('result');
const modal = document.getElementById('question-modal');
const questionText = document.getElementById('question-text');
const answersDiv = document.getElementById('answers');
const closeModal = document.querySelector('.close');
const yellowOverlay = document.getElementById('yellow-overlay');

function showModal(qidx) {
  yellowOverlay.classList.add('active');
  // Setup modal content
  questionText.textContent = questions[qidx].question;
  answersDiv.innerHTML = '';
  questions[qidx].options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.style.display = "block";
    btn.style.margin = "12px auto";
    btn.onclick = () => {
      // Fade out modal and overlay together
      yellowOverlay.classList.remove('active');
      modal.classList.remove('visible');
      cans[qidx].classList.remove('zooming');
      setTimeout(() => {
        modal.classList.add('hidden');
        questions[qidx].answered = true;
        checkAllAnswered();
      }, 500); // match CSS transition
    };
    answersDiv.appendChild(btn);
  });
  modal.classList.remove('hidden');
  // Fade in (next frame)
  setTimeout(() => {
    modal.classList.add('visible');
  }, 10);
}

cans.forEach((can, idx) => {
  can.addEventListener('click', () => {
    if (questions[idx].answered) return;
    cans.forEach(c => c.classList.remove('zooming'));
    can.classList.add('zooming');
    showModal(idx);
  });
});

closeModal.onclick = function() {
  yellowOverlay.classList.remove('active');
  modal.classList.remove('visible');
  cans.forEach(c => c.classList.remove('zooming'));
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 500);
};

function checkAllAnswered() {
  if (questions.every(q => q.answered)) {
    star.classList.add('enabled');
    star.classList.remove('disabled');
    star.style.cursor = 'pointer';
    star.onclick = function() {
      resultDiv.classList.remove('hidden');
    };
  }
}
