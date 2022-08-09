import Question from "../models/Question.js";
import { data } from "./data.js";

const questions = data.map(
  (e) => new Question(e.question, e.choices, e.answer)
);

export default questions;
