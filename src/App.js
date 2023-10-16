import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./Details";
import Homepage from "./Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
