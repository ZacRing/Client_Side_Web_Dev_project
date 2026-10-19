import { useState } from 'react';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Quiz from './components/Quiz';
import Results from './components/Results';

export default function App() {
  const [screen, setScreen] = useState('signup');
  const [currentUser, setCurrentUser] = useState(null);
  const [quizResult, setQuizResult] = useState(null);

  // Runs when the quiz is submitted or the time runs out
  function finishQuiz(quizQuestions, answers) {
    let score = 0;
    quizQuestions.forEach((item, index) => {
      if (answers[index] === item.answer) {
        score = score + 1;
      }
    });

    // Save this attempt to the signed-in user's account
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((savedUser) => savedUser.username === currentUser);

    if (user) {
      user.attempts.push({ score: score, date: new Date().toLocaleString() });
      localStorage.setItem('users', JSON.stringify(users));
    }

    setQuizResult({ questions: quizQuestions, answers: answers, score: score });
    setScreen('results');
  }

  function signOut() {
    setCurrentUser(null);
    setQuizResult(null);
    setScreen('signin');
  }

  return (
    <main className="container py-5 app">
      <header className="text-center mb-4">
        <h1>Traffic Sign Quiz</h1>
        {currentUser && <p>Signed in as {currentUser}</p>}
      </header>

      {screen === 'signup' && <SignUp goTo={setScreen} />}
      {screen === 'signin' && <SignIn goTo={setScreen} setCurrentUser={setCurrentUser} />}
      {screen === 'quiz' && <Quiz finishQuiz={finishQuiz} />}
      {screen === 'results' && (
        <Results
          goTo={setScreen}
          quizResult={quizResult}
          currentUser={currentUser}
          signOut={signOut}
        />
      )}
    </main>
  );
}