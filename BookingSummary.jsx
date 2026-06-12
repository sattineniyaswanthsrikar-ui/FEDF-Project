import { useNavigate } from "react-router-dom";

function BookingSummary() {
  const navigate = useNavigate();

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  const seat =
    localStorage.getItem("seat");

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">

        <h2>Booking Summary</h2>

        <hr />

        <p>
          <strong>Passenger:</strong>{" "}
          {user.name}
        </p>

        <p>
          <strong>Email:</strong>{" "}
          {user.email}
        </p>

        <p>
          <strong>Flight:</strong>
          {" "}IndiGo 6E-245
        </p>

        <p>
          <strong>Route:</strong>
          {" "}Hyderabad → Delhi
        </p>

        <p>
          <strong>Seat:</strong>
          {" "}{seat}
        </p>

        <p>
          <strong>Fare:</strong>
          {" "}₹4500
        </p>

        <button
          className="btn btn-primary"
          onClick={() =>
            navigate("/payment")
          }
        >
          Proceed To Payment
        </button>

      </div>
    </div>
  );
}

export default BookingSummary;