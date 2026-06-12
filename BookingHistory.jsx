function BookingHistory() {
  return (
    <div className="container mt-5">
      <h2>Booking History</h2>

      <div className="card p-3 mb-3">
        <h4>Booking #1</h4>
        <p>IndiGo</p>
        <p>Hyderabad → Delhi</p>
        <p>Status: Confirmed</p>
      </div>

      <div className="card p-3 mb-3">
        <h4>Booking #2</h4>
        <p>Air India</p>
        <p>Delhi → Mumbai</p>
        <p>Status: Confirmed</p>
      </div>
    </div>
  );
}

export default BookingHistory;