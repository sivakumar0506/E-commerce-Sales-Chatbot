import LoginForm from '../components/LoginForm';

const LoginPage = ({ onSignupLink, onLoginSuccess }) => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-3">Login</h3>
        <LoginForm onLoginSuccess={onLoginSuccess} />
        <div className="text-center mt-3">
          <p>
            Don't have an account?{' '}
            <button
              className="btn btn-link p-0"
              onClick={onSignupLink}
              style={{ textDecoration: 'underline' }}
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
