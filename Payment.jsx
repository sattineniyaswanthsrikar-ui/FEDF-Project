import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = () => {
    if (
      cardName === "" ||
      cardNumber === "" ||
      expiry === "" ||
      cvv === ""
    ) {
      alert("Please fill all payment details");
      return;
    }

    if (cardNumber.length !== 16) {
      alert("Card Number must be 16 digits");
      return;
    }

    if (cvv.length !== 3) {
      alert("CVV must be 3 digits");
      return;
    }

    alert("Payment Successful");
    navigate("/ticket");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">

        <h2>Payment</h2>

        <hr />

        <h4>Total Amount: ₹4500</h4>

        <div className="mb-3">
          <label>Card Holder Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Card Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="1234567890123456"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Expiry Date</label>
          <input
            type="month"
            className="form-control"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>CVV</label>
          <input
            type="password"
            className="form-control"
            placeholder="123"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>

        <button
          className="btn btn-success"
          onClick={handlePayment}
        >
          Pay Now
        </button>

      </div>
    </div>
  );
}

export default Payment;