//@ts-check
import Question from "./Question.js";

export default class Quiz {
  questionsIndex = 0;
  score = 0;

  /**
   * @param {Question[]} questions
   */
  constructor(questions) {
    this.questions = questions;
  }
  /**
   * @returns {Question} The question found
   */
  getQuestionsIndex() {
    return this.questions[this.questionsIndex];
  }
  isEnded() {
    return this.questions.length === this.questionsIndex;
  }
  /**
   * @param {string} answer Some text
   */
  guess(answer) {
    this.getQuestionsIndex().correctAnswer(answer) && this.score++;
    this.questionsIndex++;
  }
}
