import { useState, useEffect } from "react";
import questions from "../data/questions";

const QUESTIONS_PER_QUIZ = 10;
const QUIZ_TIME_IN_SECONDS = 180;

//mixes up the order of a list and returns a shuffled copy
function shuffle(list) {
  const copy = [...list];

  for (let i = copy.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    const temp = copy[i];
    copy[i] = copy[randomIndex];
    copy[randomIndex] = temp;
  }

  return copy;
}

//picks 10 random questions and randomises the options in each one
function createQuiz() {
  const chosenQuestions = shuffle(questions).slice(0, QUESTIONS_PER_QUIZ);

  return chosenQuestions.map((item) => {
    return {
      question: item.question,
      answer: item.answer,
      options: shuffle(item.options),
    };
  });
}

export default function Quiz({ finishQuiz }) {
  const [quizQuestions] = useState(() => createQuiz());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(QUESTIONS_PER_QUIZ).fill(null));
  const [secondsLeft, setSecondsLeft] = useState(QUIZ_TIME_IN_SECONDS);

  useEffect(() => {
    if (secondsLeft === 0) {
      finishQuiz(quizQuestions, answers);
      return;
    }

    const timer = setTimeout(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [secondsLeft]);

  //turns the seconds into a clock formatfor example 125 seconds becomes 2:05
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const timeText = minutes + ":" + String(seconds).padStart(2, "0");
  const timeIsLow = secondsLeft <= 30;

  const currentQuestion = quizQuestions[currentIndex];
  const isFirstQuestion = currentIndex === 0;
  const isLastQuestion = currentIndex === quizQuestions.length - 1;

  function chooseAnswer(option) {
    const updatedAnswers = [...answers];
    updatedAnswers[currentIndex] = option;
    setAnswers(updatedAnswers);
  }

  return (
    <section className="card p-4">
      <header className="d-flex justify-content-between align-items-center mb-2">
        <p className="text-muted mb-0">
          Question {currentIndex + 1} of {quizQuestions.length}
        </p>
        <p className={timeIsLow ? "timer timer_low" : "timer"}>{timeText}</p>
      </header>
      <h2 className="h4 mb-4">{currentQuestion.question}</h2>

      <ul className="row g-3 list-unstyled">
        {currentQuestion.options.map((option, number) => (
          <li className="col-6" key={option}>
            <button
              type="button"
              className={
                answers[currentIndex] === option
                  ? "sign_option chosen"
                  : "sign_option"
              }
              onClick={() => chooseAnswer(option)}
            >
              <img
                src={"/signs/" + option}
                alt={"Sign option " + (number + 1)}
              />
            </button>
          </li>
        ))}
      </ul>

      <nav className="d-flex justify-content-between mt-3">
        <button
          type="button"
          className="btn btn-outline-secondary"
          disabled={isFirstQuestion}
          onClick={() => setCurrentIndex(currentIndex - 1)}
        >
          Back
        </button>

        {isLastQuestion ? (
          <button
            type="button"
            className="btn btn-success"
            onClick={() => finishQuiz(quizQuestions, answers)}
          >
            Submit Quiz
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setCurrentIndex(currentIndex + 1)}
          >
            Next
          </button>
        )}
      </nav>
    </section>
  );
}
