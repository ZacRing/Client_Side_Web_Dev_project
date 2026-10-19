import { useState } from 'react';

export default function SignIn({ goTo, setCurrentUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  function handleSignIn(event) {
    event.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const matchingUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (!matchingUser) {
      setMessage('Wrong username or password.');
      return;
    }

    setCurrentUser(matchingUser.username);
    goTo('quiz');
  }

  return (
    <section className="card p-4">
      <h2>Sign In</h2>

      <form onSubmit={handleSignIn}>
        <label htmlFor="signin-username" className="form-label">Username</label>
        <input
          id="signin-username"
          type="text"
          className="form-control mb-3"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <label htmlFor="signin-password" className="form-label">Password</label>
        <input
          id="signin-password"
          type="password"
          className="form-control mb-3"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        {message && <p className="text-danger">{message}</p>}

        <button type="submit" className="btn btn-primary w-100">
          Sign In and Start Quiz
        </button>
      </form>

      <button type="button" className="btn btn-link mt-2" onClick={() => goTo('signup')}>
        No account? Sign up
      </button>
    </section>
  );
}