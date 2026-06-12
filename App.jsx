import BookingHistory from "./pages/BookingHistory";
import AdminDashboard from "./pages/AdminDashboard";
import BookingSummary from "./pages/BookingSummary";
import Payment from "./pages/Payment";
import Ticket from "./pages/Ticket";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import FlightResults from "./pages/FlightResults";
import SeatSelection from "./pages/SeatSelection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/results" element={<FlightResults />} />
        <Route path="/seats" element={<SeatSelection />} />
        <Route path="/summary" element={<BookingSummary />} />
<Route path="/payment" element={<Payment />} />
<Route path="/ticket" element={<Ticket />} />
<Route path="/history" element={<BookingHistory />} />
<Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;