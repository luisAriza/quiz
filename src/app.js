//@ts-check
import questions from "./data/questions.js";
import Quiz from "./models/Quiz.js";

function main() {
  const quiz = new Quiz(questions);

  console.log("quiz", quiz);
}

main();
