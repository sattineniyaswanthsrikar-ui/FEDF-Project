import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <span className="navbar-brand">
          Flight Booking System
        </span>

        <div>
          <Link to="/home" className="btn btn-light me-2">
            Home
          </Link>

          <Link to="/history" className="btn btn-light me-2">
            Booking History
          </Link>

          <Link to="/admin" className="btn btn-light">
            Admin Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;