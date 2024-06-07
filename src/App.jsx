import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cover from "./components/Cover";
import BirthdayCardRow from "./components/BirthdayCardRow";
import BabyShowerCardRow from "./components/BabyShowerCardRow";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <div>
        <hr />
        <Footer />
      </div>

    </Router>
  );
}

export default App;
