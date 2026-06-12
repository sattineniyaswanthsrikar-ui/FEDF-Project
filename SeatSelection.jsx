import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SeatSelection() {
  const navigate = useNavigate();

  const [selectedSeat, setSelectedSeat] = useState("");

  const seats = [
    "A1", "A2", "A3", "A4",
    "B1", "B2", "B3", "B4",
    "C1", "C2", "C3", "C4",
    "D1", "D2", "D3", "D4"
  ];

  const handleSeatSelection = (seat) => {
    setSelectedSeat(seat);
    localStorage.setItem("seat", seat);
  };

  return (
    <div className="container mt-5">

      <div className="card shadow p-4">

        <h2>Select Your Seat</h2>

        <hr />

        <div className="row">

          {seats.map((seat) => (
            <div
              className="col-3 mb-3"
              key={seat}
            >
              <button
                className={
                  selectedSeat === seat
                    ? "btn btn-success w-100"
                    : "btn btn-outline-primary w-100"
                }
                onClick={() =>
                  handleSeatSelection(seat)
                }
              >
                {seat}
              </button>
            </div>
          ))}

        </div>

        <h5 className="mt-3">
          Selected Seat:
          {" "}
          {selectedSeat || "None"}
        </h5>

        <button
          className="btn btn-success mt-3"
          disabled={!selectedSeat}
          onClick={() =>
            navigate("/summary")
          }
        >
          Continue
        </button>

      </div>

    </div>
  );
}

export default SeatSelection;