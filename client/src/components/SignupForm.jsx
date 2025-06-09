import { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [name, setName] = useState('');               // NEW: Full name
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!name || !email || !password || !confirmPwd) {
      setError('Please fill in all fields.');
      return;
    }
    if (password !== confirmPwd) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', {
        name,
        email,
        password
      });

      console.log('Signup response:', res);

      if (res.status === 201) {
        setSuccess('Signup successful! Please login.');
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPwd('');
      } else {
        setError(res.data?.message || 'Signup failed. Try again.');
      }
    } catch (err) {
      console.error('Signup error:', err);
      setError(err.response?.data?.error || 'Signup failed. Try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <div className="mb-3">
        <label htmlFor="signupName" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          id="signupName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="signupEmail" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="signupEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="user@example.com"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="signupPassword" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="signupPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
          minLength={6}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="signupConfirmPwd" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="signupConfirmPwd"
          value={confirmPwd}
          onChange={(e) => setConfirmPwd(e.target.value)}
          placeholder="Confirm password"
          required
          minLength={6}
        />
      </div>

      <button type="submit" className="btn btn-success w-100">
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
