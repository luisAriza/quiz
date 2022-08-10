//@ts-check
import questions from "./data/questions.js";
import Quiz from "./models/Quiz.js";
import UI from "./models/UI.js";

/**
 * @param {Quiz} quiz Questions, choices and answers of the quiz
 * @param {UI} ui	Quiz to render
 */
function renderPage(quiz, ui) {
  if (quiz.isEnded()) {
    ui.showScore(quiz.score);
  } else {
    ui.showQuestion(quiz.getQuestionsIndex().text);
    ui.showChoices(quiz.getQuestionsIndex().choices, (currentChoice) => {
      quiz.guess(currentChoice);
      renderPage(quiz, ui);
    });
    ui.showProgress(quiz.questionsIndex + 1, quiz.questions.length);
  }
}

function main() {
  const quiz = new Quiz(questions);
  const ui = new UI();

  renderPage(quiz, ui);
}

main();
