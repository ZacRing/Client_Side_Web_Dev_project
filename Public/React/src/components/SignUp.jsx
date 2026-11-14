import { useState } from 'react';

const MIN_USERNAME_LENGTH = 3;
const MIN_PASSWORD_LENGTH = 8;

export default function SignUp({ goTo }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  function handleSignUp(event) {
    event.preventDefault();

    if (username === '' || password === '') {
      setMessage('Please fill in both fields.');
      return;
    }

    if (username.length < MIN_USERNAME_LENGTH) {
      setMessage('Username must be at least ' + MIN_USERNAME_LENGTH + ' characters.');
      return;
    }

    if (password.length < MIN_PASSWORD_LENGTH) {
      setMessage('Password must be at least ' + MIN_PASSWORD_LENGTH + ' characters.');
      return;
    }

    // Load the saved users or start with an empty list if there are none yet
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
      setMessage('That username is already taken.');
      return;
    }

    const newUser = { username: username, password: password, attempts: [] };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    goTo('signin');
  }

  return (
    <section className="card p-4">
      <h2>Sign Up</h2>

      <form onSubmit={handleSignUp}>
        <label htmlFor="signup-username" className="form-label">Username</label>
        <input
          id="signup-username"
          type="text"
          className="form-control mb-3"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <label htmlFor="signup-password" className="form-label">Password</label>
        <input
          id="signup-password"
          type="password"
          className="form-control mb-3"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        {message && <p className="text-danger">{message}</p>}

        <button type="submit" className="btn btn-primary w-100">
          Create Account
        </button>
      </form>

      <button type="button" className="btn btn-link mt-2" onClick={() => goTo('signin')}>
        Already have an account Sign in
      </button>
    </section>
  );
}