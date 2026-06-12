function Ticket() {

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  const seat =
    localStorage.getItem("seat");

  const pnr =
    "PNR" +
    Math.floor(Math.random() * 100000);

  return (
    <div className="container mt-5">

      <div className="alert alert-success">
        Booking Confirmed Successfully!
      </div>

      <div className="card shadow p-4">

        <h2>E-Ticket</h2>

        <hr />

        <p>
          <strong>Passenger:</strong>
          {" "}{user.name}
        </p>

        <p>
          <strong>Email:</strong>
          {" "}{user.email}
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
          <strong>PNR:</strong>
          {" "}{pnr}
        </p>

        <p>
          <strong>Status:</strong>
          {" "}Confirmed
        </p>

      </div>
    </div>
  );
}

export default Ticket;