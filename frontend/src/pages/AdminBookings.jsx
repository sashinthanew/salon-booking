import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);

  const fetch = async () => {
    const res = await axios.get("http://localhost:5000/api/bookings");
    setBookings(res.data);
  };

  const changeStatus = async (id, status) => {
    await axios.put(`http://localhost:5000/api/bookings/status/${id}`, { status });
    fetch();
  };

  useEffect(() => { fetch(); }, []);

  return (
    <div className="p-8">
      {bookings.map(b => (
        <div key={b._id} className="mb-4 p-4 bg-white shadow rounded">
          <p><strong>User</strong>: {b.userEmail}</p>
          <p><strong>Service</strong>: {b.service}</p>
          <p><strong>Date</strong>: {b.date}</p>
          <p><strong>Time</strong>: {b.time}</p>
          <p><strong>Status</strong>: {b.status}</p>
          <div className="mt-2 flex gap-2">
            <button disabled={b.status === "confirmed"} onClick={() => changeStatus(b._id, "confirmed")} className="btn-confirm">Confirm</button>
            <button disabled={b.status === "rejected"} onClick={() => changeStatus(b._id, "rejected")} className="btn-reject">Reject</button>
          </div>
        </div>
      ))}
    </div>
  );
}
