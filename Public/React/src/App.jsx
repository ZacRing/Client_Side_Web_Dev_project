import { useState } from 'react';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Quiz from './components/Quiz';
import Results from './components/Results';
import QuizRules from './components/QuizRules';

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

  const showRules = screen === 'signup' || screen === 'signin';

  return (
    <>
      <header className="site_header text-center">
        <h1>Traffic Sign Quiz</h1>
        {currentUser && <p className="mb-0">Signed in as {currentUser}</p>}
      </header>

      <main className={showRules ? 'container app flex-grow-1 w-100 welcome_layout' : 'container app flex-grow-1 w-100'}>
        {showRules && <QuizRules />}

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

      <footer className="site_footer text-center">
        Road sign images from Department of Transport on Wikimedia. 
      </footer>
    </>
  );
}