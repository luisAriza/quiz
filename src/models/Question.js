class Question {
  /**
   * @param {string} text This is the text of the question
   * @param {string[]} choices These are the choices
   * @param {string} answer This is the answer
   */
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  /**
   * @param {string} choice Answer from user
   * @returns {boolean} True if the answer is correct and false otherwise
   */
  correctAnswer(choice) {
    return choice === this.answer;
  }
}

export default Question;
