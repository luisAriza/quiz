export default class UI {
  constructor() {}
  /**
   * @param {string} text Question to render
   */
  showQuestion(text) {
    const questionTitle = document.getElementById("question");
    questionTitle.textContent = text;
  }
  /**
   * @param {string[]} choices Choices of the question to render
   * @param {function} callBack answer selected
   */
  showChoices(choices, callBack) {
    const choicesList = document.getElementById("choices");
    choicesList.innerHTML = "";

    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement("button");
      button.className = "btn";
      button.textContent = choices[i];
      button.addEventListener("click", () => callBack(choices[i]));

      choicesList.appendChild(button);
    }
  }
  /**
   * @param {number} score Total score
   */
  showScore(score) {
    const quizEndHTML = `
    <h1>Result</h1>
    <h2>Your Score: ${score}</h2>
    `;
    const element = document.getElementById("quiz");
    element.innerHTML = quizEndHTML;
  }
  /**
   * @param {number} currentIndex Current index of the quiz
   * @param {number} total Total questions
   */
  showProgress(currentIndex, total) {
    document.getElementById("progress").innerHTML =;
  }
}
