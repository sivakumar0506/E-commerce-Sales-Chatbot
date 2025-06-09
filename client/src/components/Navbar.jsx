const Navbar = ({ onLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <a className="navbar-brand" href="/">
        Uplyft AI Chatbot
      </a>
      <div className="ms-auto">
        <button className="btn btn-outline-light" onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
