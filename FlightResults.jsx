import { useNavigate } from "react-router-dom";

function FlightResults() {
  const navigate = useNavigate();

  const flights = [
    {
      airline: "IndiGo",
      flightNo: "6E-245",
      price: 4500,
      duration: "2h 15m"
    },
    {
      airline: "Air India",
      flightNo: "AI-302",
      price: 5200,
      duration: "2h 30m"
    },
    {
      airline: "Akasa Air",
      flightNo: "QP-120",
      price: 4300,
      duration: "2h 10m"
    }
  ];

  return (
    <div className="container mt-5">
      <h2>Available Flights</h2>

      {flights.map((flight, index) => (
        <div key={index} className="card shadow p-3 mb-3">
          <h4>{flight.airline}</h4>
          <p>Flight No: {flight.flightNo}</p>
          <p>Route: Hyderabad → Delhi</p>
          <p>Duration: {flight.duration}</p>
          <p>Price: ₹{flight.price}</p>

          <button
            className="btn btn-primary"
            onClick={() => navigate("/seats")}
          >
            Select Flight
          </button>
        </div>
      ))}
    </div>
  );
}

export default FlightResults;