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
   */
  showChoices(choices) {
    const choicesList = document.getElementById("choices");
    choicesList.innerHTML = choices
      .map((choice) => `<button class="btn">${choice}</button>`)
      .join("");
  }
}
