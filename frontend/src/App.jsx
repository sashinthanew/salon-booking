import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import BookNow from "./pages/BookNow";
import MyBookings from "./pages/MyBookings";
import AdminBookings from "./pages/AdminBookings"; // ✅ Correctly imported

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setLoggedInUser(JSON.parse(stored));
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home user={loggedInUser} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* ✅ Fix: use loggedInUser instead of user */}
        <Route
          path="/my-bookings"
          element={
            loggedInUser ? <MyBookings user={loggedInUser} /> : <Navigate to="/login" />
          }
        />

        <Route path="/admin/bookings" element={<AdminBookings />} />

        <Route
          path="/admin-dashboard"
          element={
            loggedInUser?.role === "admin" ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/user-dashboard"
          element={
            loggedInUser?.role === "user" ? (
              <UserDashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/book-now"
          element={
            loggedInUser ? (
              <BookNow user={loggedInUser} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
