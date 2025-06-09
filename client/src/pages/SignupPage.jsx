import SignupForm from '../components/SignupForm';

const SignupPage = ({ onLoginLink }) => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-3">Sign Up</h3>
        <SignupForm />
        <div className="text-center mt-3">
          <p>
            Already have an account?{' '}
            <button
              className="btn btn-link p-0"
              onClick={onLoginLink}
              style={{ textDecoration: 'underline' }}
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
