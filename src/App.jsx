import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import VenueManager from "./components/VenueManager";
import AddVenue from "./components/AddVenue";
import Dashboard from "./components/Dashboard";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/venues" element={<VenueManager />} />
        <Route path="/add-venue" element={<AddVenue />} />
      </Routes>
    </Router>
  );
}

export default App;
