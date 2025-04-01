let currentQuestionIndex = 0;

function showQuestion(index) {
    const questions = document.querySelectorAll('.question');
    questions.forEach((question, i) => {
        question.style.display = (i === index) ? 'block' : 'none';
    });
}

function checkAnswers() {
    const answers = {
        answer1: '54',
        answer2: '9',
        answer3: '10',
        answer4: 'Help Point',
        answer5: 'Hai',
        answer6: '5',
        answer7: 'Ask for Help',
        answer8: 'ug',
        answer9: '3',
        answer10: '8'
    };

    const inputField = document.getElementById(`answer${currentQuestionIndex + 1}`);
    const userAnswer = inputField.value.toLowerCase();
    const correctAnswer = answers[`answer${currentQuestionIndex + 1}`].toLowerCase();

    if (userAnswer === correctAnswer) {
        inputField.classList.add('correct');
        inputField.classList.remove('wrong');
        currentQuestionIndex++;
        if (currentQuestionIndex < Object.keys(answers).length) {
            showQuestion(currentQuestionIndex);
        } else {
            alert("Herzlichen Glückwunsch! Du hast alle Fragen beantwortet.");
        }
    } else {
        inputField.classList.add('wrong');
        inputField.classList.remove('correct');
    }
}

function showTip(questionNumber) {
    const tip = document.getElementById(`tip${questionNumber}`);
    if (tip.style.display === "none") {
        tip.style.display = "block"; // Tipp anzeigen
    } else {
        tip.style.display = "none"; // Tipp ausblenden
    }
}

// Initiale Frage anzeigen
showQuestion(currentQuestionIndex);