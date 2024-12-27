import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; // Import React Router components
import { Homepage, AboutUS, ContactUs, NotFoundBage, Signin, AdminDashBordBage, AddBet ,FaqsAdmin} from './view/router/index'; // Import your Pages
import { Navbar, Footer } from './view/router/componentRouter'; // Import Navbar and Footer
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS (includes Popper.js)

function AppContent() {
  const location = useLocation(); // Get the current location

  // Determine if Navbar and Footer should be shown
  const showNavbar = location.pathname !== "/signin" && location.pathname !== "/adminDashBord";
  const showFooter = location.pathname !== "/signin" && location.pathname !== "/adminDashBord";

  return (
    <>
      {/* Conditionally render Navbar */}
      {showNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Home Page */}
        <Route path="/about-us" element={<AboutUS />} /> {/* About Us Page */}
        <Route path="/contact" element={<ContactUs />} /> {/* Contact Us Page */}
        <Route path="*" element={<NotFoundBage />} /> {/* Catch-all for 404 Page */}
        <Route path="/signin" element={<Signin />} /> {/* Sign-In Page */}
        <Route path="/adminDashBord" element={<AdminDashBordBage />} /> {/* Admin Dashboard Page */}
        <Route path="/create-bet" element={<AddBet />} /> {/* Add Bet Page */}
        <Route path="/faqs" element={<FaqsAdmin/>}/>
      </Routes>

      {/* Conditionally render Footer */}
      {showFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent /> {/* Wrap the routes and logic inside AppContent */}
    </Router>
  );
}

export default App;
