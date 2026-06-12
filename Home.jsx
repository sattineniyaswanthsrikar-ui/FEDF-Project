import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  const navigate = useNavigate();

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h4 className="mb-3">
          Welcome, {user.name}
        </h4>

        <div className="bg-primary text-white p-5 rounded mb-4">
          <h1>Book Your Next Journey</h1>
          <p>
            Search and book flights quickly and easily.
          </p>
        </div>

        <div className="card shadow p-4">

          <h3 className="mb-3">Search Flights</h3>

          <div className="mb-3">
            <label>Source City</label>
            <input
              type="text"
              className="form-control"
              placeholder="Hyderabad"
            />
          </div>

          <div className="mb-3">
            <label>Destination City</label>
            <input
              type="text"
              className="form-control"
              placeholder="Delhi"
            />
          </div>

          <div className="mb-3">
            <label>Travel Date</label>
            <input
              type="date"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Travel Class</label>
            <select className="form-control">
              <option>Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </select>
          </div>

          <button
            className="btn btn-primary me-2"
            onClick={() => navigate("/results")}
          >
            Search Flights
          </button>

          <button
            className="btn btn-secondary me-2"
            onClick={() => navigate("/history")}
          >
            Booking History
          </button>

          <button
            className="btn btn-dark"
            onClick={() => navigate("/admin")}
          >
            Admin Dashboard
          </button>

        </div>
      </div>
    </>
  );
}

export default Home;