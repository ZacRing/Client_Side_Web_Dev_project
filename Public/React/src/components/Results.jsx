import { useState } from 'react';

const PASS_MARK = 8;

export default function Results({ goTo, quizResult, currentUser, signOut }) {
  const [showWrongAnswers, setShowWrongAnswers] = useState(false);

  const score = quizResult.score;
  const totalQuestions = quizResult.questions.length;
  const passed = score >= PASS_MARK;

  // Build a list of the questions the user got wrong or didnt answer
  const wrongAnswers = [];
  quizResult.questions.forEach((item, index) => {
    const userAnswer = quizResult.answers[index];

    if (userAnswer !== item.answer) {
      wrongAnswers.push({
        question: item.question,
        correctAnswer: item.answer,
        userAnswer: userAnswer,
      });
    }
  });

  // Load this users past attempts from localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find((savedUser) => savedUser.username === currentUser);
  const attempts = user ? user.attempts : [];

  return (
    <section className="card p-4">
      <h2 className={passed ? 'result_heading passed' : 'result_heading failed'}>
        {passed ? 'You passed!' : 'You failed'}
      </h2>
      <p className="fs-5">
        You scored {score} out of {totalQuestions}. You need {PASS_MARK} to pass.
      </p>

      <nav className="d-flex flex-wrap gap-2 mb-4">
        {!passed && (
          <button type="button" className="btn btn-primary" onClick={() => goTo('quiz')}>
            Try Again
          </button>
        )}

        {wrongAnswers.length > 0 && (
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => setShowWrongAnswers(!showWrongAnswers)}
          >
            {showWrongAnswers ? 'Hide wrong answers' : 'Show wrong answers'}
          </button>
        )}

        <button type="button" className="btn btn-outline-danger" onClick={signOut}>
          Sign Out
        </button>
      </nav>

      {showWrongAnswers && (
        <section className="mb-4">
          <h3 className="h5">Questions you got wrong</h3>

          {wrongAnswers.map((item) => (
            <article className="wrong_answer" key={item.question}>
              <p className="fw-bold">{item.question}</p>

              <figure>
                {item.userAnswer ? (
                  <img src={'/signs/' + item.userAnswer} alt="Your answer" />
                ) : (
                  <p className="no_answer">No answer</p>
                )}
                <figcaption>Your answer</figcaption>
              </figure>

              <figure>
                <img src={'/signs/' + item.correctAnswer} alt="Correct answer" />
                <figcaption>Correct answer</figcaption>
              </figure>
            </article>
          ))}
        </section>
      )}

      <section>
        <h3 className="h5">Your previous attempts</h3>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Attempt</th>
              <th>Score</th>
              <th>Result</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {attempts.map((attempt, number) => (
              <tr key={number}>
                <td>{number + 1}</td>
                <td>{attempt.score} / {totalQuestions}</td>
                <td>{attempt.score >= PASS_MARK ? 'Pass' : 'Fail'}</td>
                <td>{attempt.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
}