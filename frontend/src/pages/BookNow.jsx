import React, { useState } from "react";
import axios from "axios";

function BookNow({ user }) {
  const [form, setForm] = useState({ service: "", date: "", time: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/bookings", {
      ...form,
      userEmail: user.email,
    });
    alert("Booking placed successfully!");
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Book Your Appointment</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input placeholder="Service" className="w-full p-2 border" required
          onChange={(e) => setForm({ ...form, service: e.target.value })}
        />
        <input type="date" className="w-full p-2 border" required
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
        <input type="time" className="w-full p-2 border" required
          onChange={(e) => setForm({ ...form, time: e.target.value })}
        />
        <button type="submit" className="bg-blue-900 text-white px-4 py-2 rounded">Book</button>
      </form>
    </div>
  );
}

export default BookNow;
