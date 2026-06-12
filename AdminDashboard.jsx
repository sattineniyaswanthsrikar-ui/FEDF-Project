function AdminDashboard() {
  return (
    <div className="container mt-5">
      <h2>Admin Dashboard</h2>

      <div className="card p-3 mb-3">
        <h4>Add New Flight</h4>

        <input
          type="text"
          placeholder="Airline Name"
          className="form-control mb-2"
        />

        <input
          type="text"
          placeholder="Source"
          className="form-control mb-2"
        />

        <input
          type="text"
          placeholder="Destination"
          className="form-control mb-2"
        />

        <button className="btn btn-success">
          Add Flight
        </button>
      </div>

      <div className="card p-3">
        <h4>Total Bookings</h4>
        <p>25</p>
      </div>
    </div>
  );
}

export default AdminDashboard;